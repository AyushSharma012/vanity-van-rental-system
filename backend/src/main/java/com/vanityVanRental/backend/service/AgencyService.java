package com.vanityVanRental.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.vanityVanRental.backend.model.Agency;
import com.vanityVanRental.backend.model.MapperUtility;
import com.vanityVanRental.backend.model.modelDTO.AdminAgencyResponse;
import com.vanityVanRental.backend.model.modelDTO.AgencyRegisterRequest;
import com.vanityVanRental.backend.model.modelDTO.AgencyResponse;
import com.vanityVanRental.backend.model.modelDTO.LoginRequest;
import com.vanityVanRental.backend.repository.AgencyRepo;

@Service
public class AgencyService { 
    @Autowired
    AgencyRepo repo; 

    // register agency
    public AgencyResponse registerAgency(AgencyRegisterRequest request){
        if(repo.findAgencyByEmail(request.getEmail()) != null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The server cannot be process the request due to the client error.");
        }

        Agency agency = new Agency();

        agency.setContactNumber(request.getContactNumber());
        agency.setEmail(request.getEmail());
        agency.setHashedPassword(request.getHashedPassword());
        agency.setLocation(request.getLocation());
        agency.setName(request.getName());
        agency.setOwnerName(request.getOwnerName());
        // agency.setVerificationDocsUrl(request.getVerificationDocsUrl());

        agency.setVerificationStatus(false);
        agency.setActive(true);

        repo.save(agency);
        return MapperUtility.toAgencyResponse(agency);
    }

    // login agency
    public AgencyResponse loginAgency(LoginRequest request){
        Agency agency = repo.findAgencyByEmail(request.getEmail());
        String agencyPassword = agency.getHashedPassword();
        String requestPassword = request.getHashedPassword();
        if(!agencyPassword.equals(requestPassword)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "agency not exist");
        }

        if(!requestPassword.equals(agencyPassword) ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email/password");
        }
        
        return MapperUtility.toAgencyResponse(agency);
    }

    // check verification status
    public boolean checkVerificationStatus(String agencyId){
        AgencyResponse agency = findAgencyById(agencyId);

        return agency.isVerificationStatus();
    }

    // view profile
    public AgencyResponse viewProfile(String agencyId){
        AgencyResponse response = findAgencyById(agencyId);
        return response;
    }

    // update profile
    public AgencyResponse updateProfile(String agencyId, AgencyResponse response){
        Agency agency = repo.findById(agencyId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "agency not found"));

        //only updates not null fields
        MapperUtility.updateAgency(agency, response);
        
        repo.save(agency);

        return MapperUtility.toAgencyResponse(agency);
    }

    public List<AgencyResponse> agencyList(){
        List<Agency> agencies = repo.findAll();
        return MapperUtility.toAgencyResponseList(agencies);
    }

    // approve agency
    public AgencyResponse approveAgency(String agencyId){
        Agency agency = repo.findById(agencyId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "agency not found"));

        if(!agency.isVerificationStatus()){
            agency.setVerificationStatus(true);
            repo.save(agency);
            return MapperUtility.toAgencyResponse(agency);
        }

        return MapperUtility.toAgencyResponse(agency);
    }

    // view profile for admin
    public AdminAgencyResponse viewProfileForAdmin(String agencyId){
        Agency agency = repo.findById(agencyId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "agency not found"));
        AdminAgencyResponse response = MapperUtility.toaAgencyAdminResponse(agency) ;
        return response;
    }

    // -------------- NEEDED LOGOUT --------------
    // here...

    // helper method
    public AgencyResponse findAgencyById(String agencyId){
        Agency agency = repo.findById(agencyId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "agency not found"));

        return MapperUtility.toAgencyResponse(agency);
    }
}
