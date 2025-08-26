package com.vanityVanRental.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.vanityVanRental.backend.model.Agency;

@Repository
public interface AgencyRepo extends MongoRepository<Agency, String>{
    Agency findAgencyByEmail(String email);
}
 