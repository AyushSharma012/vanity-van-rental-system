package com.vanityVanRental.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vanityVanRental.backend.repository.VanRepo;
import com.vanityVanRental.backend.service.VanService;

// import com.vanityVanRental.backend.model.Van;
// import com.vanityVanRental.backend.service.VanService;

// import java.util.List;

@RestController
@RequestMapping("/api/vans")
public class VanController {

    @Autowired
    VanService vanService;

    @Autowired
    VanRepo vanRepository;

    @GetMapping("/check-registration")
    public ResponseEntity<Boolean> isRegistrationNumberAvailable(@RequestParam String registrationNumber) {
        boolean exists = vanRepository.existsByRegistrationNumber(registrationNumber);
        return ResponseEntity.ok(!exists); // ✅ Return true if available
    }

}
