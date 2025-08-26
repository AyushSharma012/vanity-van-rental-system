package com.vanityVanRental.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vanityVanRental.backend.model.Driver;
import com.vanityVanRental.backend.model.MapperUtility;
import com.vanityVanRental.backend.model.modelDTO.DriverRequest;
import com.vanityVanRental.backend.model.modelDTO.DriverResponse;
import com.vanityVanRental.backend.service.DriverService;

@RestController
@RequestMapping("/api/agency")
public class AgencyDriverController {

    @Autowired
    private DriverService driverService;

    // 1. Add Driver
    @PostMapping("/{agencyId}/drivers")
    public ResponseEntity<DriverResponse> addDriver(
            @PathVariable String agencyId,
            @RequestBody DriverRequest request) {

        request.setAgencyId(agencyId);
        DriverResponse response = driverService.addDriver(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // 2. View Driver List
    @GetMapping("/{agencyId}/drivers")
    public ResponseEntity<List<DriverResponse>> getAllDriversByAgency(
            @PathVariable String agencyId) {

        List<DriverResponse> drivers = driverService.getDriversByAgency(agencyId);
        return ResponseEntity.ok(drivers);
    }

    // 3. View Driver Details
    @GetMapping("/drivers/{driverId}")
    public ResponseEntity<DriverResponse> getDriverDetails(
            @PathVariable String driverId) {

        DriverResponse response = driverService.getDriverById(driverId);
        return ResponseEntity.ok(response);
    }

    // 4. Edit Driver Details
    @PutMapping("/{agencyId}/drivers/{driverId}")
    public ResponseEntity<Driver> updateDriver(
            @PathVariable String agencyId,
            @PathVariable String driverId,
            @RequestBody Driver updatedDriver) {

        Driver saved = driverService.updateDriver(agencyId, driverId, updatedDriver);
        return ResponseEntity.ok(saved);
    }

    // 5. Remove Driver (soft delete)
    @DeleteMapping("/{agencyId}/drivers/{driverId}")
    public ResponseEntity<DriverResponse> removeDriver(
            @PathVariable String agencyId,
            @PathVariable String driverId) {

        DriverResponse response = driverService.requestDriverRemoval(driverId, agencyId);
        return ResponseEntity.ok(response);
    }

    // 6. Check Driver Approval Status
    @GetMapping("/drivers/{driverId}/active-status")
    public ResponseEntity<Boolean> isDriverActive(
            @PathVariable String driverId) {

        boolean isActive = driverService.isDriverActive(driverId);
        return ResponseEntity.ok(isActive);
    }

    // 7. Assign Van to Driver
    @PutMapping("/{agencyId}/drivers/{driverId}/assign-van/{vanId}")
    public ResponseEntity<DriverResponse> assignVanToDriver(
            @PathVariable String agencyId,
            @PathVariable String driverId,
            @PathVariable String vanId) {

        Driver driver = driverService.assignVan(agencyId, driverId, vanId);
        return ResponseEntity.ok(MapperUtility.toDriverResponse(driver));
    }

} 