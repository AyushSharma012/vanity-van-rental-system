package com.vanityVanRental.backend.model.modelDTO;

public class CustomerRegisterRequest {
    private String name;
    private String email;
    private String contactNumber;
    private String hashedPassword;
    private String address;

    public CustomerRegisterRequest(String name, String email, String contactNumber, String hashedPassword,
            String address) {
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
        this.hashedPassword = hashedPassword;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    
}
