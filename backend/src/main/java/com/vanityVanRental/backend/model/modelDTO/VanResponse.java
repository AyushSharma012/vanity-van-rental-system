package com.vanityVanRental.backend.model.modelDTO;

public class VanResponse {
    private String id;
    private String name;
    private String type;
    private int capacity;
    private String location;
    private int pricePerHour;
    private String images;
    private boolean availabilityStatus;

    private boolean approvalStatus;
    private boolean removalRequest;

    private String registrationNumber;
    private String driverId;

    public VanResponse(String id, String name, String type, int capacity, String location, int pricePerHour,
            String images, boolean availabilityStatus, boolean approvalStatus, boolean removalRequest, String registrationNumber, String driverId) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.location = location;
        this.pricePerHour = pricePerHour;
        this.images = images;
        this.availabilityStatus = availabilityStatus;
        this.approvalStatus = approvalStatus;
        this.removalRequest = removalRequest;
        this.registrationNumber = registrationNumber;
        this.driverId = driverId;
    }

    public VanResponse() {
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(int pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public boolean isAvailabilityStatus() {
        return availabilityStatus;
    }

    public void setAvailabilityStatus(boolean availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public boolean isApprovalStatus() {
        return approvalStatus;
    }

    public void setApprovalStatus(boolean approvalStatus) {
        this.approvalStatus = approvalStatus;
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

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getDriverId() {
        return driverId;
    }

    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }
}
