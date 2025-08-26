package com.vanityVanRental.backend.model.modelDTO;

public class DriverResponse {
    private String id;
    private String name;
    private String contactNumber;
    private String licenseNumber;
    private String licenseDocsUrl;
    private boolean availabilityStatus;
    private boolean isActive;

    private String agencyId;
    private String assignedVanId;
    public DriverResponse(String id, String name, String contactNumber, String licenseNumber, String licenseDocsUrl,
            boolean availabilityStatus, boolean isActive, String agencyId, String assignedVanId) {
        this.id = id;
        this.name = name;
        this.contactNumber = contactNumber;
        this.licenseNumber = licenseNumber;
        this.licenseDocsUrl = licenseDocsUrl;
        this.availabilityStatus = availabilityStatus;
        this.isActive = isActive;
        this.agencyId = agencyId;
        this.assignedVanId = assignedVanId;
    }
    public DriverResponse() {
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
    public String getLicenseNumber() {
        return licenseNumber;
    }
    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }
    public String getLicenseDocsUrl() {
        return licenseDocsUrl;
    }
    public void setLicenseDocsUrl(String licenseDocsUrl) {
        this.licenseDocsUrl = licenseDocsUrl;
    }
    public boolean isAvailabilityStatus() {
        return availabilityStatus;
    }
    public void setAvailabilityStatus(boolean availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }
    public boolean isActive() {
        return isActive;
    }
    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }
    public String getAgencyId() {
        return agencyId;
    }
    public void setAgencyId(String agencyId) {
        this.agencyId = agencyId;
    }
    public String getAssignedVanId() {
        return assignedVanId;
    }
    public void setAssignedVanId(String assignedVanId) {
        this.assignedVanId = assignedVanId;
    }
}
