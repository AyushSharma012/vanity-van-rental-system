package com.vanityVanRental.backend.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import com.vanityVanRental.backend.model.modelDTO.AdminAgencyResponse;
import com.vanityVanRental.backend.model.modelDTO.AdminVanResponse;
import com.vanityVanRental.backend.model.modelDTO.AgencyResponse;
import com.vanityVanRental.backend.model.modelDTO.CustomerResponse;
import com.vanityVanRental.backend.model.modelDTO.DriverRequest;
import com.vanityVanRental.backend.model.modelDTO.DriverResponse;
import com.vanityVanRental.backend.model.modelDTO.VanRequest;
import com.vanityVanRental.backend.model.modelDTO.VanResponse;

public class MapperUtility {

    // ----------- AGENCY RELATED MAPPING -----------

    // Agency -> AgencyResponse
    public static AgencyResponse toAgencyResponse(Agency agency) {
        if (agency == null)
            return null;

        AgencyResponse agencyResponse = new AgencyResponse();

        agencyResponse.setId(agency.getId());
        agencyResponse.setContactNumber(agency.getContactNumber());
        agencyResponse.setEmail(agency.getEmail());
        agencyResponse.setHashedPassword(agency.getHashedPassword());
        agencyResponse.setLocation(agency.getLocation().toLowerCase());
        agencyResponse.setName(agency.getName());
        agencyResponse.setOwnerName(agency.getOwnerName());
        agencyResponse.setVerificationStatus(agency.isVerificationStatus());

        return agencyResponse;
    }

    // update entity 'response -> agency'
    public static void updateAgency(Agency agency, AgencyResponse response) {
        if (response.getContactNumber() != null)
            agency.setContactNumber(response.getContactNumber());
        if (response.getEmail() != null)
            agency.setEmail(response.getEmail());
        if (response.getHashedPassword() != null)
            agency.setHashedPassword(response.getHashedPassword());
        if (response.getLocation() != null)
            agency.setLocation(response.getLocation().toLowerCase());
        if (response.getName() != null)
            agency.setName(response.getName());
        if (response.getOwnerName() != null)
            agency.setOwnerName(response.getOwnerName());
    }

    public static List<AgencyResponse> toAgencyResponseList(List<Agency> agencies) {
        return agencies.stream()
                .map(MapperUtility::toAgencyResponse)
                .collect(Collectors.toList());
    }

    // ----------- Admin Agency RELATED MAPPING -----------

    public static AdminAgencyResponse toaAgencyAdminResponse(Agency agency){
        AdminAgencyResponse response = new AdminAgencyResponse();

        response.setContactNumber(agency.getContactNumber());
        response.setEmail(agency.getEmail());
        response.setHashedPassword(agency.getHashedPassword());
        response.setId(agency.getId());
        response.setLocation(agency.getLocation().toLowerCase());
        response.setName(agency.getName());
        response.setOwnerName(agency.getOwnerName());
        response.setVerificationDocsUrl(agency.getVerificationDocsUrl());
        // response.setVerificationStatus(agency.set);
    
        return response;
    }

    // ----------- VAN RELATED MAPPING -----------

    // VanRequest -> Van
    public static Van toVan(VanRequest request) {
        Van van = new Van();

        van.setName(request.getName());
        van.setType(request.getType());
        van.setCapacity(request.getCapacity() > 0 ? request.getCapacity() : -1);
        van.setImages(request.getImages());
        van.setPricePerHour(request.getPricePerHour() > 0 ? request.getPricePerHour() : -1);
        van.setLocation(request.getLocation().toLowerCase());
        van.setAvailabilityStatus(request.isAvailabilityStatus());

        van.setAgencyId(request.getAgencyId());
        van.setDriverId(request.getDriverId());

        van.setApprovalStatus(false); // default value on creation
        van.setRemovalRequest(false); // default value on creation
        van.setActive(true); // assuming a new van is active by default

        van.setRegistrationNumber(request.getRegistrationNumber());

        van.setCreatedAt(LocalDateTime.now());

        van.setRegistrationDocsUrl(request.getRegistrationDocsUrl());
        van.setDriverId(request.getDriverId());

        return van;
    }

    public static VanResponse toVanResponse(Van van) {
        VanResponse response = new VanResponse();
        response.setId(van.getId());
        response.setName(van.getName());
        response.setType(van.getType());
        response.setCapacity(van.getCapacity());
        response.setLocation(van.getLocation() != null ? van.getLocation().toLowerCase() : null);
        response.setPricePerHour(van.getPricePerHour());
        response.setImages(van.getImages());
        response.setAvailabilityStatus(van.isAvailabilityStatus());
        response.setApprovalStatus(van.isApprovalStatus());
        response.setRemovalRequest(van.isRemovalRequest());
        response.setRegistrationNumber(van.getRegistrationNumber());
        response.setDriverId(van.getDriverId());

        return response;
    }

    public static List<VanResponse> toVanResponseList(List<Van> vans) {
        return vans.stream()
                .map(MapperUtility::toVanResponse)
                .collect(Collectors.toList());
    }

    // ----------- Admin van RELATED MAPPING -----------
    public static AdminVanResponse toAdminVanResponse(Van van){
        AdminVanResponse response = new AdminVanResponse();

        response.setAgencyId(van.getAgencyId());
        response.setApprovalStatus(van.isApprovalStatus());
        response.setAvailabilityStatus(van.isAvailabilityStatus());
        response.setCapacity(van.getCapacity());
        response.setDriverId(van.getDriverId());
        response.setId(van.getId());
        response.setImages(van.getImages());
        response.setLocation(van.getLocation());
        response.setName(van.getName());
        response.setPricePerHour(van.getPricePerHour());
        response.setRegistrationDocsUrl(van.getRegistrationDocsUrl());
        response.setRegistrationNumber(van.getRegistrationNumber());
        
        return response;
    }

    // ----------- DRIVER RELATED MAPPING -----------

    // DriverRequest -> Driver (used during creation)
    public static Driver toDriver(DriverRequest request) {
        Driver driver = new Driver();

        driver.setName(request.getName());
        driver.setContactNumber(request.getContactNumber());
        driver.setLicenseNumber(request.getLicenseNumber());
        driver.setLicenseDocsUrl(request.getLicenseDocsUrl());
        driver.setAvailabilityStatus(request.isAvailabilityStatus());
        driver.setAgencyId(request.getAgencyId());
        driver.setAssignedVanId(request.getAssignedVanId());

        // `isActive` can be set as true by default if needed (optional)
        driver.setActive(true);
        driver.setApprovalStatus(false);

        return driver;
    }

    // Driver -> DriverResponse (for returning to client)
    public static DriverResponse toDriverResponse(Driver driver) {
        DriverResponse response = new DriverResponse();

        response.setId(driver.getId());
        response.setName(driver.getName());
        response.setContactNumber(driver.getContactNumber());
        response.setLicenseNumber(driver.getLicenseNumber());
        response.setLicenseDocsUrl(driver.getLicenseDocsUrl());
        response.setAvailabilityStatus(driver.isAvailabilityStatus());
        response.setActive(driver.isActive());
        response.setAgencyId(driver.getAgencyId());
        response.setAssignedVanId(driver.getAssignedVanId());

        return response;
    }

    // List<Driver> -> List<DriverResponse>
    public static List<DriverResponse> toDriverResponseList(List<Driver> drivers) {
        return drivers.stream()
                .map(MapperUtility::toDriverResponse)
                .collect(Collectors.toList());
    }

    // ----------- CUSTOMER RELATED MAPPING -----------
    
    // customer -> customer response
    public static CustomerResponse toCustomerResponse(Customer customer) {
        CustomerResponse response = new CustomerResponse();

        response.setId(customer.getId());
        response.setName(customer.getName());
        response.setEmail(customer.getEmail());
        response.setContactNumber(customer.getContactNumber());
        response.setAddress(customer.getAddress());
        // response.setCreatedAt(customer.getCreatedAt());
        // response.setActive(customer.isActive());

        return response;
    }

    public static List<CustomerResponse> toCustomerResponseList(List<Customer> customers) {
        return customers.stream()
                .map(MapperUtility::toCustomerResponse)
                .collect(Collectors.toList());
    }

}
