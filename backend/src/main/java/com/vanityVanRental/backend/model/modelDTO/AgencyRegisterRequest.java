package com.vanityVanRental.backend.model.modelDTO;

public class AgencyRegisterRequest {
    private String name;
    private String ownerName;
    private String email;
    private String hashedPassword;
    private String contactNumber;
    private String location;
    private String verificationDocsUrl;

    public AgencyRegisterRequest(String name, String ownerName, String email, String hashedPassword,
            String contactNumber, String location, String verificationDocsUrl) {
        this.name = name;
        this.ownerName = ownerName;
        this.email = email;
        this.hashedPassword = hashedPassword;
        this.contactNumber = contactNumber;
        this.location = location;
        this.verificationDocsUrl = verificationDocsUrl;
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
    public String getVerificationDocsUrl() {
        return verificationDocsUrl;
    }
    public void setVerificationDocsUrl(String verificationDocsUrl) {
        this.verificationDocsUrl = verificationDocsUrl;
    }
}
