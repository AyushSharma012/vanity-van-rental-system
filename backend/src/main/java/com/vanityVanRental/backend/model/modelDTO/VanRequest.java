package com.vanityVanRental.backend.model.modelDTO;

public class VanRequest {
    private String name;
    private String type;
    private int capacity;
    private String images;
    private int pricePerHour;
    private String location;
    private boolean availabilityStatus;

    private String agencyId;
    private String driverId;

    private String registrationNumber;
    private String registrationDocsUrl;

    public VanRequest(String name, String type, int capacity, String images, int pricePerHour, String location,
            boolean availabilityStatus, boolean approvalStatus, String agencyId, boolean removalRequest, String driverId, String registrationNumber, String registrationDocsUrl) {
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.images = images;
        this.pricePerHour = pricePerHour;
        this.location = location;
        this.availabilityStatus = availabilityStatus;
        this.agencyId = agencyId;
        this.driverId = driverId;
        this.registrationNumber = registrationNumber;
        this.registrationDocsUrl = registrationDocsUrl;
    }

    public VanRequest() {
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

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getRegistrationDocsUrl() {
        return registrationDocsUrl;
    }

    public void setRegistrationDocsUrl(String registrationDocsUrl) {
        this.registrationDocsUrl = registrationDocsUrl;
    }

}
