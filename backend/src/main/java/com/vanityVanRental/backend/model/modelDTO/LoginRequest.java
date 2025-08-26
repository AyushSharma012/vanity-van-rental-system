package com.vanityVanRental.backend.model.modelDTO;

public class LoginRequest {
    private String email;
    private String hashedPassword;
    public LoginRequest(String email, String hashedPassword) {
        this.email = email;
        this.hashedPassword = hashedPassword;
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
}
