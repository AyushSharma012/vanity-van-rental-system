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
import org.springframework.web.bind.annotation.RestController;

import com.vanityVanRental.backend.model.modelDTO.AgencyRegisterRequest;
import com.vanityVanRental.backend.model.modelDTO.AgencyResponse;
import com.vanityVanRental.backend.model.modelDTO.LoginRequest;
import com.vanityVanRental.backend.service.AgencyService;


@RestController
@RequestMapping("/api/agency")
public class AgencyController {
    @Autowired
    AgencyService service;

    // @Autowired
    // VanService vanService;

    @GetMapping("/")
    public ResponseEntity<List<AgencyResponse>> getAgencies() {
        List<AgencyResponse> vans = service.agencyList();
        return ResponseEntity.ok(vans);
    }

    // login
    @PostMapping("/auth/register")
    public ResponseEntity<String> registerAgency(@RequestBody AgencyRegisterRequest request){
        service.registerAgency(request);
        return ResponseEntity.ok("Agency Registered successfully");
    }
 
    // register
    @PostMapping("/auth/login")
    public ResponseEntity<AgencyResponse> loginAgency(@RequestBody LoginRequest request){
        return ResponseEntity.ok(service.loginAgency(request));
    }
    // get verification status
    @GetMapping("/{agencyId}/verification-status")
    public ResponseEntity<Boolean> checkVerificationStatus(@PathVariable String agencyId){
        boolean response = service.checkVerificationStatus(agencyId);
        return ResponseEntity.ok(response);
    }

    // get profile details 
    @GetMapping("/{agencyId}/profile")
    public ResponseEntity<AgencyResponse> viewProfile(@PathVariable String agencyId){
        AgencyResponse agency = service.viewProfile(agencyId);
        return ResponseEntity.ok(agency);
    }

    // update profile
    @PutMapping("/{agencyId}/profile/update-profile")
    public ResponseEntity<AgencyResponse> updateProfile(@PathVariable String agencyId, @RequestBody AgencyResponse response){
        AgencyResponse agency = service.updateProfile(agencyId, response);
        return ResponseEntity.ok(agency);
    }

    // sample for van
    
}
