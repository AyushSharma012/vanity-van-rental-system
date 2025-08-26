package com.vanityVanRental.backend.model.modelDTO;

public class AdminVanResponse extends VanResponse{
    private String driverId;
    private String agencyId;

    private String driverName; 
    private String agencyName; 

    private String registrationDocsUrl;

    public AdminVanResponse(){}

    public AdminVanResponse(String id, String name, String type, int capacity, String location, int pricePerHour,
            String images, boolean availabilityStatus, boolean approvalStatus, boolean removalRequest, String registrationNumber, String driverId, String agencyId, String registrationDocsUrl, String driverName, String agencyName){
        
        super(id, name, type, capacity, location, pricePerHour, images, availabilityStatus, approvalStatus, removalRequest, registrationNumber, driverId);
        
        this.driverId = driverId;
        this.driverName = driverName;
        this.agencyId = agencyId;
        this.agencyName = agencyName;
        this.registrationDocsUrl = registrationDocsUrl;
    }

    public String getDriverId() {
        return driverId;
    }

    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }

    public String getAgencyId() {
        return agencyId;
    }

    public void setAgencyId(String agencyId) {
        this.agencyId = agencyId;
    }

    public String getRegistrationDocsUrl() {
        return registrationDocsUrl;
    }

    public void setRegistrationDocsUrl(String registrationDocsUrl) {
        this.registrationDocsUrl = registrationDocsUrl;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getAgencyName() {
        return agencyName;
    }

    public void setAgencyName(String agencyName) {
        this.agencyName = agencyName;
    }   
}
