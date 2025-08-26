package com.vanityVanRental.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.vanityVanRental.backend.model.modelDTO.VanRequest;
import com.vanityVanRental.backend.model.modelDTO.VanResponse;
import com.vanityVanRental.backend.service.AgencyService;
import com.vanityVanRental.backend.service.VanService;

// import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;

@RestController
@RequestMapping("/api/agency")
public class AgencyVanController {

    @Autowired
    AgencyService service;

    @Autowired
    VanService vanService;

    // Adding a van
    @PostMapping("/{agencyId}/vans")
    public ResponseEntity<VanResponse> addVan(
            @PathVariable String agencyId,
            @RequestBody VanRequest request) {

        VanResponse response = vanService.addVan(request, agencyId);
        return ResponseEntity.ok(response);
    }

    // view van list
    @GetMapping("/{agencyId}/vans")
    public ResponseEntity<List<VanResponse>> getVansForAgency(
            @PathVariable String agencyId) {

        List<VanResponse> vans = vanService.vansList(agencyId);
        return ResponseEntity.ok(vans);
    }

    // getting van details
    @GetMapping("/{agencyId}/vans/{vanId}")
    public ResponseEntity<VanResponse> viewVanDetails(@PathVariable String agencyId, @PathVariable String vanId) {
        VanResponse response = vanService.viewVanDetails(agencyId, vanId);
        return ResponseEntity.ok(response);
    }

    // apply for van removal
    @PutMapping("/{agencyId}/vans/{vanId}/request-removal")
    public ResponseEntity<VanResponse> requestVanRemoval(
            @PathVariable String agencyId,
            @PathVariable String vanId) {

        VanResponse response = vanService.requestVanRemoval(agencyId, vanId);
        return ResponseEntity.ok(response);
    }

    // check van approval status
    @GetMapping("/vans/{vanId}/approval-status")
    public ResponseEntity<Boolean> checkVanApprovalStatus(@PathVariable String vanId) {
        boolean isApproved = vanService.isVanApproved(vanId);
        return ResponseEntity.ok(isApproved);
    }

    // toggle availability
    @PutMapping("/{agencyId}/vans/{vanId}/toggle-availability")
    public ResponseEntity<VanResponse> toggleAvailability(
            @PathVariable String agencyId,
            @PathVariable String vanId) {

        VanResponse updatedVan = vanService.toggleVanAvailability(agencyId, vanId);
        return ResponseEntity.ok(updatedVan);
    }

    // cancel removal request
    @PutMapping("/{agencyId}/vans/{vanId}/cancel-removal")
    public ResponseEntity<VanResponse> cancelRemovalRequest(
            @PathVariable String agencyId,
            @PathVariable String vanId) {

        VanResponse response = vanService.cancelRemovalRequest(agencyId, vanId);
        return ResponseEntity.ok(response);
    }

    @PostMapping(value = "/{agencyId}/vans/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<VanResponse> uploadVanWithFiles(
            @PathVariable String agencyId,
            @RequestPart("data") VanRequest vanRequest,
            @RequestPart(value = "image", required = false) MultipartFile imageFile,
            @RequestPart(value = "document", required = false) MultipartFile documentFile) {

        VanResponse response = vanService.addVanWithFiles(vanRequest, agencyId, imageFile, documentFile);
        return ResponseEntity.ok(response);
    }

}
