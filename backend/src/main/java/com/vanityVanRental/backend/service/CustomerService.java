package com.vanityVanRental.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.vanityVanRental.backend.model.Customer;
import com.vanityVanRental.backend.model.MapperUtility;
import com.vanityVanRental.backend.model.Van;
import com.vanityVanRental.backend.model.modelDTO.CustomerRegisterRequest;
import com.vanityVanRental.backend.model.modelDTO.CustomerResponse;
import com.vanityVanRental.backend.model.modelDTO.LoginRequest;
import com.vanityVanRental.backend.model.modelDTO.VanResponse;
import com.vanityVanRental.backend.repository.CustomerRepo;
import com.vanityVanRental.backend.repository.VanRepo;

// TODO: needs password encoder
@Service
public class CustomerService {
    @Autowired
    CustomerRepo repo;

    @Autowired
    VanRepo vanRepo;

    // register customer
    public void registerCustomer(CustomerRegisterRequest request) {
        if (repo.findCustomerByEmail(request.getEmail()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Customer already exists.");
        }

        Customer customer = new Customer();

        customer.setName(request.getName());
        customer.setAddress(request.getAddress());
        customer.setContactNumber(request.getContactNumber());
        customer.setEmail(request.getEmail());
        customer.setHashedPassword(request.getHashedPassword());
        customer.setCreatedAt(LocalDateTime.now());
        customer.setActive(true);

        // TODO: password encoder here

        repo.save(customer);
    }

    // login customer
    public CustomerResponse loginCustomer(LoginRequest request) {

        Customer customer = repo.findCustomerByEmail(request.getEmail());

        if (customer == null) {
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "User not exist");
        }

        // System.out.println("Request password: " + request.getHashedPassword());
        // System.out.println("DB password: " + customer.getHashedPassword());

        if (!customer.getHashedPassword().equals(request.getHashedPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }

        return MapperUtility.toCustomerResponse(customer);
    }

    // all customers
    public List<CustomerResponse> listCustomers() {
        List<Customer> customers = repo.findAll();
        return MapperUtility.toCustomerResponseList(customers);
    }

    // 1. View Profile
    public CustomerResponse viewProfile(String customerId) {
        Customer customer = repo.findById(customerId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer not found"));

        return MapperUtility.toCustomerResponse(customer);
    }

    // 2. Update Profile (excluding password) 
    public CustomerResponse updateProfile(String customerId, CustomerResponse updatedData) {
        Customer customer = repo.findById(customerId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer not found"));

        if (updatedData.getName() != null)
            customer.setName(updatedData.getName());
        if (updatedData.getContactNumber() != null)
            customer.setContactNumber(updatedData.getContactNumber());
        if (updatedData.getAddress() != null)
            customer.setAddress(updatedData.getAddress());

        repo.save(customer);
        return MapperUtility.toCustomerResponse(customer);
    }

    // search vans
    public List<VanResponse> searchVansByLocation(String location) {
        List<Van> vans = vanRepo.findByLocation(location);
        return MapperUtility.toVanResponseList(vans);
    }

}
