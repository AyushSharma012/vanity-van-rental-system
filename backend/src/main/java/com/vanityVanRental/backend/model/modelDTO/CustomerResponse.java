package com.vanityVanRental.backend.model.modelDTO;


public class CustomerResponse {
    private String id;
    private String name;
    private String email;
    private String contactNumber;
    private String address;

    // Constructors
    public CustomerResponse() {}

    public CustomerResponse(String id, String name, String email, String contactNumber, String address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
        this.address = address;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getContactNumber() { return contactNumber; }
    public void setContactNumber(String contactNumber) { this.contactNumber = contactNumber; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

}

