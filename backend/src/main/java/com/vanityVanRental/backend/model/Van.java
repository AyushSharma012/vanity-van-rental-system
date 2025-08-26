package com.vanityVanRental.backend.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vans")
public class Van {
    @Id
    private String id;
    private String name;
    private String type;
    private int capacity = -1;
    private String images;
    private int pricePerHour = -1;
    private String location;
    private boolean availabilityStatus = false; 
    private boolean approvalStatus = false; 
    private boolean removalRequest = false;
    private boolean isActive;
    private LocalDateTime createdAt;

    private String driverId;
    private String agencyId;

    private String registrationNumber;

    private String registrationDocsUrl;

    public Van() {
    }

    public Van(String id, String name, String type, int capacity, String images, int pricePerHour, String location,
            boolean availabilityStatus, boolean approvalStatus, boolean isActive, LocalDateTime createdAt,
            String agencyId, String driverId, boolean removalRequest, String registrationNumber, String registrationDocsUrl) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.images = images;
        this.pricePerHour = pricePerHour;
        this.location = location;
        this.availabilityStatus = availabilityStatus;
        this.approvalStatus = approvalStatus;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.agencyId = agencyId;
        this.removalRequest = removalRequest;
        this.driverId = driverId;
        this.registrationNumber = registrationNumber;
        this.registrationDocsUrl = registrationDocsUrl;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public int getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(int pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isAvailabilityStatus() {
        return availabilityStatus;
    }

    public void setAvailabilityStatus(boolean availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }

    public boolean isApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(boolean approvalStatus) {
        this.approvalStatus = approvalStatus;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    } 

    public String getAgencyId() {
        return agencyId;
    }

    public void setAgencyId(String agencyId) {
        this.agencyId = agencyId;
    }

    public String getDriverId() {
        return driverId;
    }

    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }

    public boolean isRemovalRequest() {
        return removalRequest;
    }

    public void setRemovalRequest(boolean removalRequest) {
        this.removalRequest = removalRequest;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registerationNumber) {
        this.registrationNumber = registerationNumber;
    }

    public String getRegistrationDocsUrl() {
        return registrationDocsUrl;
    }

    public void setRegistrationDocsUrl(String registrationDocsUrl) {
        this.registrationDocsUrl = registrationDocsUrl;
    }

    
}
