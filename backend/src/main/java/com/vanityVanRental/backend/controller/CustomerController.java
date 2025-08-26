package com.vanityVanRental.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vanityVanRental.backend.model.modelDTO.CustomerRegisterRequest;
import com.vanityVanRental.backend.model.modelDTO.CustomerResponse;
import com.vanityVanRental.backend.model.modelDTO.LoginRequest;
import com.vanityVanRental.backend.model.modelDTO.VanResponse;
import com.vanityVanRental.backend.service.CustomerService;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    CustomerService service;

    // Register Customer
    @PostMapping("/auth/register")
    public ResponseEntity<String> register(@RequestBody CustomerRegisterRequest request) {

        service.registerCustomer(request);
        return ResponseEntity.ok("Customer created successfully");
    }

    // login customer
    @PostMapping("/auth/login")
    public ResponseEntity<CustomerResponse> login(@RequestBody LoginRequest request) {
        // service.loginCustomer(request);
        return ResponseEntity.ok(service.loginCustomer(request));
    }
 
    @GetMapping("/")
    public ResponseEntity<List<CustomerResponse>> customerList() {
        List<CustomerResponse> responses = service.listCustomers();
        return ResponseEntity.ok(responses);
    }

    // 1. View Profile
    @GetMapping("/{customerId}/profile")
    public ResponseEntity<CustomerResponse> viewProfile(@PathVariable String customerId) {
        CustomerResponse profile = service.viewProfile(customerId);
        return ResponseEntity.ok(profile);
    }

    // 2. Update Profile
    @PutMapping("/{customerId}/profile")
    public ResponseEntity<CustomerResponse> updateProfile(
            @PathVariable String customerId,
            @RequestBody CustomerResponse updatedData) {
        CustomerResponse updated = service.updateProfile(customerId, updatedData);
        return ResponseEntity.ok(updated);
    }

    // search vans by location
    @GetMapping("/vans/search")
    public ResponseEntity<List<VanResponse>> searchVansByLocation(@RequestParam String location) {
        List<VanResponse> vans = service.searchVansByLocation(location);
        return ResponseEntity.ok(vans);
    }
}
