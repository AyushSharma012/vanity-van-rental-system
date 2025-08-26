package com.vanityVanRental.backend.model.modelDTO;

public class AdminAgencyResponse extends AgencyResponse{
    private String verificationDocsUrl;

    public AdminAgencyResponse(String id, String name, String ownerName, String email, String hashedPassword, String contactNumber,
            String location, boolean verificationStatus, String verificationDocsUrl) {
            
        super(id, name, ownerName, email, hashedPassword, contactNumber, location, verificationStatus);
        this.verificationDocsUrl = verificationDocsUrl;
    }

    public AdminAgencyResponse(){}


    public String getVerificationDocsUrl() {
        return verificationDocsUrl;
    }
    public void setVerificationDocsUrl(String verificationDocsUrl) {
        this.verificationDocsUrl = verificationDocsUrl;
    }
}
