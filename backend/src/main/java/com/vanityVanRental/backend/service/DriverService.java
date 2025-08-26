package com.vanityVanRental.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.vanityVanRental.backend.model.Driver;
import com.vanityVanRental.backend.model.MapperUtility;
import com.vanityVanRental.backend.model.Van;
import com.vanityVanRental.backend.model.modelDTO.DriverRequest;
import com.vanityVanRental.backend.model.modelDTO.DriverResponse;
import com.vanityVanRental.backend.repository.AgencyRepo;
import com.vanityVanRental.backend.repository.DriverRepo;
import com.vanityVanRental.backend.repository.VanRepo;

@Service
public class DriverService {

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private VanRepo vanRepo;

    @Autowired
    private AgencyRepo agencyRepo;

    // 1. Add Driver
    public DriverResponse addDriver(DriverRequest request) {
        // Verify agency exists
        agencyRepo.findById(request.getAgencyId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Agency not found"));

        Driver driver = MapperUtility.toDriver(request);
        // driver.setActive(true); // default on creation
        driverRepo.save(driver);

        return MapperUtility.toDriverResponse(driver);
    }

    // 2. View Driver List by Agency
    public List<DriverResponse> getDriversByAgency(String agencyId) {
        agencyRepo.findById(agencyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Agency not found"));

        List<Driver> drivers = driverRepo.findByAgencyId(agencyId);
        return MapperUtility.toDriverResponseList(drivers);
    }

    // 3. View Driver Details
    public DriverResponse getDriverById(String driverId) {
        Driver driver = driverRepo.findById(driverId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Driver not found"));
        return MapperUtility.toDriverResponse(driver);
    }

    // 4. Edit Driver Details
    public Driver updateDriver(String agencyId, String driverId, Driver updatedDriver) {
        Driver existingDriver = driverRepo.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));

        if (!existingDriver.getAgencyId().equals(agencyId)) {
            throw new RuntimeException("Unauthorized update");
        }

        existingDriver.setName(updatedDriver.getName());
        existingDriver.setContactNumber(updatedDriver.getContactNumber());
        existingDriver.setLicenseNumber(updatedDriver.getLicenseNumber());

        return driverRepo.save(existingDriver);
    }

    // 5. Remove Driver (request for removal)
    public DriverResponse requestDriverRemoval(String driverId, String agencyId) {
        Driver driver = driverRepo.findById(driverId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Driver not found"));

        if (!driver.getAgencyId().equals(agencyId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You are not authorized to remove this driver");
        }

        if (!driver.isActive()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Driver is already inactive");
        }

        driver.setActive(false); // Soft remove
        driverRepo.save(driver);

        return MapperUtility.toDriverResponse(driver);
    }

    // 6. Check Driver Approval status
    public boolean isDriverActive(String driverId) {
        Driver driver = driverRepo.findById(driverId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Driver not found"));

        return driver.isApprovalStatus(); // true if approved/active, false if removed/inactive
    }

    public Driver assignVan(String agencyId, String driverId, String vanId) {
        Driver driver = driverRepo.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));

        if (!driver.getAgencyId().equals(agencyId)) {
            throw new RuntimeException("Driver does not belong to this agency");
        }

        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new RuntimeException("Van not found"));

        if (!van.getAgencyId().equals(agencyId)) {
            throw new RuntimeException("Van does not belong to this agency");
        }


        // System.out.println(van.getDriverId().equals(""));
        // ✅ New check to avoid assigning van already taken by another driver
        if (!van.getDriverId().equals("") && !van.getDriverId().equals(driverId)) {
            // System.out.println("van driver" + van.getDriverId());
            // System.out.println("driver" + driverId);
            throw new RuntimeException("Van is already assigned to another driver");
        }

        // ✅ Optional: Unassign previous van from this driver
        if (driver.getAssignedVanId() != null && !driver.getAssignedVanId().equals(vanId)) {
            Van previousVan = vanRepo.findById(driver.getAssignedVanId()).orElse(null);
            if (previousVan != null) {
                previousVan.setDriverId(null);
                vanRepo.save(previousVan);
            }
        }

        // ✅ Assign new van
        driver.setAssignedVanId(vanId);
        van.setDriverId(driverId);

        System.out.println(driver);

        vanRepo.save(van);
        return driverRepo.save(driver);
    }

}
