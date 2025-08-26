package com.vanityVanRental.backend.model;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "agencies")
public class Agency {
    @Id
    private String id;
    private String name;
    private String ownerName;
    private String email;
    private String hashedPassword;
    private String contactNumber;
    private String location;
    private boolean verificationStatus;
    private String verificationDocsUrl;
    private LocalDateTime createdAt;
    private boolean isActive; 

    private List<Van> vans;
    private List<Driver> drivers;
    
    public Agency() {
    }

    public Agency(String id, String name, String ownerName, String email, String hashedPassword, String contactNumber,
            String location, boolean verificationStatus, LocalDateTime createdAt, boolean isActive, String verificationDocsUrl, List<Van> vans, List<Driver> drivers) {
        this.id = id;
        this.name = name;
        this.ownerName = ownerName;
        this.email = email;
        this.hashedPassword = hashedPassword;
        this.contactNumber = contactNumber;
        this.location = location;
        this.verificationStatus = verificationStatus;
        this.verificationDocsUrl = verificationDocsUrl;
        this.createdAt = createdAt;
        this.isActive = isActive;
        this.vans = vans;
        this.drivers = drivers;
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

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email; 
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isVerificationStatus() {
        return verificationStatus;
    }

    public void setVerificationStatus(boolean verificationStatus) {
        this.verificationStatus = verificationStatus;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public boolean isActive() {
        return isActive;
    } 

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public String getVerificationDocsUrl() {
        return verificationDocsUrl;
    }

    public void setVerificationDocsUrl(String verificationDocsUrl) {
        this.verificationDocsUrl = verificationDocsUrl;
    }

    public List<Van> getVans() {
        return vans;
    }

    public void setVans(List<Van> vans) {
        this.vans = vans;
    }

    public List<Driver> getDrivers() {
        return drivers;
    }

    public void setDrivers(List<Driver> drivers) {
        this.drivers = drivers;
    }
}
