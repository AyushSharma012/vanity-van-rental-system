package com.vanityVanRental.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vanityVanRental.backend.model.modelDTO.AdminAgencyResponse;
import com.vanityVanRental.backend.model.modelDTO.AdminVanResponse;
import com.vanityVanRental.backend.model.modelDTO.AgencyResponse;
import com.vanityVanRental.backend.model.modelDTO.CustomerResponse;
import com.vanityVanRental.backend.model.modelDTO.VanResponse;
import com.vanityVanRental.backend.service.AgencyService;
import com.vanityVanRental.backend.service.CustomerService;
import com.vanityVanRental.backend.service.VanService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Value("${admin.key}")
    private String adminKey;

    @Autowired
    private CustomerService customerService;
    @Autowired
    private AgencyService agencyService;
    @Autowired
    private VanService vanService;

    // dashboard mapping
    @GetMapping("/dashboard")
    public ResponseEntity<String> getDashboard(@RequestHeader("ADMIN-KEY") String keyFromRequest){

        if(!adminKey.equals(keyFromRequest)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid admin key");
        }

        return ResponseEntity.ok("welcome to admin dashboard");
    }

    // ----------- for CUSTOMERS -----------

    //View customers list
    @GetMapping("/customers")
    public ResponseEntity<List<CustomerResponse>> customerList(){
        List<CustomerResponse> response = customerService.listCustomers();
        return ResponseEntity.ok(response);
    }

    // view customer details
    @GetMapping("/customers/{customerId}")
    public ResponseEntity<CustomerResponse> customerDetails(@PathVariable String customerId){
        CustomerResponse response = customerService.viewProfile(customerId);
        return ResponseEntity.ok(response);
    }

    // ----------- for AGENCIES -----------
    @GetMapping("/agencies")
    public ResponseEntity<List<AgencyResponse>> agencyList(){
        List<AgencyResponse> response = agencyService.agencyList();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/agencies/{agencyId}")
    public ResponseEntity<AdminAgencyResponse> viewAgencyProfileForAdmin(@PathVariable String agencyId){
        AdminAgencyResponse response = agencyService.viewProfileForAdmin(agencyId);
        return ResponseEntity.ok(response); 
    }

    @PutMapping("/agencies/{agencyId}")
    public ResponseEntity<AgencyResponse> approveAgency(@PathVariable String agencyId){
        AgencyResponse response = agencyService.approveAgency(agencyId);
        return ResponseEntity.ok(response); 
    }

    // ----------- for VANS -----------
    @GetMapping("/vans")
    public ResponseEntity<List<VanResponse>> vanList(){
        List<VanResponse> response = vanService.vansListForAdmin();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/vans/{vanId}")
    public ResponseEntity<AdminVanResponse> vanDetailsForAdmin(@PathVariable String vanId){
        AdminVanResponse response = vanService.vanForAdmin(vanId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/vans/{vanId}")
    public ResponseEntity<VanResponse> approveVan(@PathVariable String vanId){
        VanResponse response = vanService.approveVan(vanId);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/vans/{vanId}")
    public ResponseEntity<Boolean> removeVan(@PathVariable String vanId){
        return ResponseEntity.ok(vanService.removeVan(vanId));
    }
}
