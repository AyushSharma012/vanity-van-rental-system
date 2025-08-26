package com.vanityVanRental.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "drivers")
public class Driver {
    @Id
    private String id;
    private String name;
    private String contactNumber;
    private String licenseNumber;
    private String licenseDocsUrl;
    private boolean availabilityStatus;
    private boolean isActive;
    private boolean approvalStatus;

    private String agencyId;
    private String assignedVanId; 

    public Driver() {
    }
    
    public Driver(String id, String name, String contactNumber, String licenseNumber, boolean availabilityStatus,
            boolean isActive, String licenseDocsUrl, String agencyId, String assignedVanId, boolean approvalStatus) {
        this.id = id;
        this.name = name; 
        this.contactNumber = contactNumber;
        this.licenseNumber = licenseNumber;
        this.availabilityStatus = availabilityStatus;
        this.isActive = isActive;
        this.licenseDocsUrl = licenseDocsUrl;
        this.agencyId = agencyId;
        this.assignedVanId = assignedVanId;
        this.approvalStatus = approvalStatus;
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

    public String getLicenseDocsUrl() {
        return licenseDocsUrl;
    }

    public void setLicenseDocsUrl(String licenseDocsUrl) {
        this.licenseDocsUrl = licenseDocsUrl;
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

    public boolean isApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(boolean approvalStatus) {
        this.approvalStatus = approvalStatus;
    }
    
}