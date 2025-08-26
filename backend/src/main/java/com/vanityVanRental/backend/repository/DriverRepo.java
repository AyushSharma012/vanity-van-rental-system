package com.vanityVanRental.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vanityVanRental.backend.model.Driver;

public interface DriverRepo extends MongoRepository<Driver, String>{
    List<Driver> findByAgencyId(String agencyId);
}
