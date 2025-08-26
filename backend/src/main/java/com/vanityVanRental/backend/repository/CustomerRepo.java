package com.vanityVanRental.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.vanityVanRental.backend.model.Customer;

@Repository
public interface CustomerRepo extends MongoRepository<Customer, String>{
    Customer findCustomerByEmail(String Email);
}   
 