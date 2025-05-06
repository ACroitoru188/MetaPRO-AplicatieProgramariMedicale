package com.medicline.backend.controller;

import com.medicline.backend.dto.RecomandareRequest;
import com.medicline.backend.dto.RecomandareResponse;
import com.medicline.backend.model.Afectiune;
import com.medicline.backend.model.Specialist;
import com.medicline.backend.repository.AfectiuneRepository;
import com.medicline.backend.repository.SpecialistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/recommendation")
public class RecomandareController {

    @Autowired
    private AfectiuneRepository afectiuneRepository;

    @Autowired
    private SpecialistRepository specialistRepository;

    @PostMapping
    public ResponseEntity<?> recomandaSpecialist(@RequestBody RecomandareRequest request) {

        Optional<Afectiune> afectiuneOptional = afectiuneRepository.findByNumeContainingIgnoreCase(request.getSimptome());

        if (afectiuneOptional.isEmpty()) {
            return ResponseEntity.status(404).body("Nu am găsit o specializare potrivită pentru aceste simptome.");
        }

        String rol = afectiuneOptional.get().getRol();


        Specialist specialist = specialistRepository.findAll()
                .stream()
                .filter(s -> s.getRol().equalsIgnoreCase(rol))
                .findFirst()
                .orElse(null);

        if (specialist == null) {
            return ResponseEntity.status(404).body("Nu există niciun specialist cu rolul: " + rol);
        }


        RecomandareResponse raspuns = new RecomandareResponse(
                rol,
                specialist.getUsername(),
                specialist.getClinica().getNume()
        );

        return ResponseEntity.ok(raspuns);
    }
}
