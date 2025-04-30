package com.medicline.backend.controller;

import com.medicline.backend.dto.SignupSpecialistRequest;
import com.medicline.backend.model.Specialist;
import com.medicline.backend.service.SpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/specialists")
public class SpecialistController {

    @Autowired
    private SpecialistService specialistService;

    // 🔹 Signup specialist
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupSpecialistRequest request) {
        try {
            Specialist specialist = new Specialist();
            specialist.setUsername(request.getUsername());
            specialist.setPassword(request.getPassword());
            specialist.setTelefon(request.getTelefon());
            specialist.setRol(request.getRol());

            Specialist savedSpecialist = specialistService.registerSpecialist(specialist, request.getClinicaNume());
            return ResponseEntity.ok(savedSpecialist);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // 🔹 Login specialist
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Specialist specialist) {
        Specialist authenticated = specialistService.loginSpecialist(specialist.getUsername(), specialist.getPassword());
        if (authenticated != null) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    // 🔹 Get specialist by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getSpecialistById(@PathVariable Long id) {
        Optional<Specialist> specialist = specialistService.getById(id);
        return specialist.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 🔹 Get all specialists
    @GetMapping
    public ResponseEntity<List<Specialist>> getAllSpecialists() {
        return ResponseEntity.ok(specialistService.getAllSpecialists());
    }

    // 🔹 Get specialists by clinic ID
    @GetMapping("/clinica/{clinicaId}")
    public ResponseEntity<List<Specialist>> getSpecialistsByClinicaId(@PathVariable Long clinicaId) {
        return ResponseEntity.ok(specialistService.getSpecialistsByClinicaId(clinicaId));
    }
}
