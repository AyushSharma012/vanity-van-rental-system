package com.vanityVanRental.backend.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.vanityVanRental.backend.model.Van;
import com.vanityVanRental.backend.model.modelDTO.AdminVanResponse;
import com.vanityVanRental.backend.model.modelDTO.VanRequest;
import com.vanityVanRental.backend.model.modelDTO.VanResponse;
import com.vanityVanRental.backend.model.Agency;
import com.vanityVanRental.backend.model.Driver;
import com.vanityVanRental.backend.model.MapperUtility;
import com.vanityVanRental.backend.repository.AgencyRepo;
import com.vanityVanRental.backend.repository.DriverRepo;
import com.vanityVanRental.backend.repository.VanRepo;

@Service
public class VanService {

    @Autowired
    VanRepo vanRepo;

    @Autowired
    AgencyRepo agencyRepo;

    @Autowired
    DriverRepo driverRepo;

    // ------ Add van ------ (by Agency)

    public VanResponse addVan(VanRequest request, String agencyId) {

        agencyRepo.findById(agencyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "agency not found"));

        request.setAgencyId(agencyId);

        Van van = MapperUtility.toVan(request);

        vanRepo.save(van);

        return MapperUtility.toVanResponse(van);
    }

    // ------ View van details ------

    public VanResponse viewVanDetails(String agencyId, String vanId) {
        agencyRepo.findById(agencyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "agency not found"));
        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "van not found"));

        return MapperUtility.toVanResponse(van);
    }

    // ------ View van list ------
    public List<VanResponse> vansList(String agencyId) {
        agencyRepo.findById(agencyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "agency not found"));
        List<Van> vans = vanRepo.findByAgencyId(agencyId);
        return MapperUtility.toVanResponseList(vans);
    }

    // remove van request
    public VanResponse requestVanRemoval(String agencyId, String vanId) {
        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Van not found"));

        if (!van.getAgencyId().equals(agencyId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You are not authorized to remove this van.");
        }

        if (van.isRemovalRequest()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Removal already requested for this van.");
        }

        van.setRemovalRequest(true);
        vanRepo.save(van);

        return MapperUtility.toVanResponse(van);
    }

    // check van approval status
    public boolean isVanApproved(String vanId) {
        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Van not found"));

        return van.isApprovalStatus();
    }

    // toggle avaialbility
    public VanResponse toggleVanAvailability(String agencyId, String vanId) {
        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Van not found"));

        if (!van.getAgencyId().equals(agencyId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Unauthorized agency access");
        }

        // Toggle the availability
        van.setAvailabilityStatus(!van.isAvailabilityStatus());

        // Save and return updated response
        vanRepo.save(van);

        return MapperUtility.toVanResponse(van);
    }

    // cancel removal request
    public VanResponse cancelRemovalRequest(String agencyId, String vanId) {
        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Van not found"));

        if (!van.getAgencyId().equals(agencyId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Unauthorized access");
        }

        if (!van.isRemovalRequest()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No removal request exists");
        }

        van.setRemovalRequest(false); // Cancel the removal request
        vanRepo.save(van);

        return MapperUtility.toVanResponse(van);
    }

    // is van avaialble?
    // public boolean isRegistrationNumberAvailable(String registrationNumber) {
    // return vanRepo.findByRegistrationNumber(registrationNumber) == null;
    // }

    // ----------- for admin ------------
    public List<VanResponse> vansListForAdmin() {
        List<Van> vans = vanRepo.findAll();
        return MapperUtility.toVanResponseList(vans);
    }

    public AdminVanResponse vanForAdmin(String vanId) {
        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Van not found"));

        String driverName = "";
        if (van.getDriverId() != null) {
            Driver driver = driverRepo.findById(van.getDriverId()).orElse(null);
            driverName = driver != null ? driver.getName() : "N/A";
        }

        String agencyName = "";
        if (van.getAgencyId() != null) {
            Agency agency = agencyRepo.findById(van.getAgencyId()).orElse(null);
            agencyName = agency != null ? agency.getName() : "N/A";
        }

        return new AdminVanResponse(
                van.getId(), van.getName(), van.getType(), van.getCapacity(),
                van.getLocation(), van.getPricePerHour(), van.getImages(),
                van.isAvailabilityStatus(), van.isApprovalStatus(), van.isRemovalRequest(),
                van.getRegistrationNumber(), van.getDriverId(),
                van.getAgencyId(), van.getRegistrationDocsUrl(), driverName, agencyName);
    }

    public VanResponse approveVan(String vanId) {
        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Van not found"));

        if (!van.isApprovalStatus()) {
            van.setApprovalStatus(true);
            vanRepo.save(van);
            return MapperUtility.toVanResponse(van);
        }

        return MapperUtility.toVanResponse(van);
    }

    public boolean removeVan(String vanId) {
        Van van = vanRepo.findById(vanId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Van not found"));

        if (van.isRemovalRequest()) {
            vanRepo.delete(van);
            return true;
        }

        return false;
    }

    public VanResponse addVanWithFiles(VanRequest request, String agencyId, MultipartFile imageFile,
            MultipartFile documentFile) {

        agencyRepo.findById(agencyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Agency not found"));

        request.setAgencyId(agencyId);

        // Relative folder path inside your project
        String relativeFolderPath = "uploads" + File.separator + "agencies" + File.separator + agencyId + File.separator
                + "vans";

        // Absolute path for saving file
        String absoluteBasePath = Paths.get(System.getProperty("user.dir"), relativeFolderPath).toString();;

        File uploadDir = new File(absoluteBasePath);
        if (!uploadDir.exists() && !uploadDir.mkdirs()) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Could not create upload directory");
        }

        // Handle Image Upload
        if (imageFile != null && !imageFile.isEmpty()) {
            String imageName = UUID.randomUUID() + "_" + imageFile.getOriginalFilename();
            File imageDest = new File(uploadDir, imageName);
            try {
                imageFile.transferTo(imageDest);
                // Save relative path to DB
                request.setImages(relativeFolderPath + File.separator + imageName);
            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Image upload failed: " + e.getMessage());
            }
        }

        // Handle Document Upload
        if (documentFile != null && !documentFile.isEmpty()) {
            String docName = UUID.randomUUID() + "_" + documentFile.getOriginalFilename();
            File docDest = new File(uploadDir, docName);
            try {
                documentFile.transferTo(docDest);
                request.setRegistrationDocsUrl(relativeFolderPath + File.separator + docName);
            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Document upload failed: " + e.getMessage());
            }
        }

        // Save Van
        Van van = MapperUtility.toVan(request);
        vanRepo.save(van);

        return MapperUtility.toVanResponse(van);
    }

}
