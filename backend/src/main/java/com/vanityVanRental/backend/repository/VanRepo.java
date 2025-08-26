package com.vanityVanRental.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.vanityVanRental.backend.model.Van;

@Repository
public interface VanRepo extends MongoRepository<Van, String>{
    List<Van> findByAgencyId(String agencyId);  
    List<Van> findByLocation(String location);
    boolean existsByRegistrationNumber(String registrationNumber);
}
