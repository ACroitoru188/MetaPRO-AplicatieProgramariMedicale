package com.medicline.backend.controller;

import com.medicline.backend.model.Clinica;
import com.medicline.backend.service.ClinicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clinics")
public class ClinicaController {

    @Autowired
    private ClinicaService clinicaService;


    @PostMapping

    public ResponseEntity<Clinica> createClinica(@RequestBody Clinica clinica) {
        System.out.println("Received clinic: " + clinica.getNume());
        return ResponseEntity.ok(clinicaService.saveClinica(clinica));
    }



    @GetMapping
    public ResponseEntity<List<Clinica>> getAllClinics() {
        return ResponseEntity.ok(clinicaService.getAllClinics());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Clinica> getClinicaById(@PathVariable Long id) {
        return clinicaService.getClinicaById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PutMapping("/{id}")
    public ResponseEntity<Clinica> updateClinica(@PathVariable Long id, @RequestBody Clinica clinica) {
        return ResponseEntity.ok(clinicaService.updateClinica(id, clinica));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClinica(@PathVariable Long id) {
        clinicaService.deleteClinica(id);
        return ResponseEntity.ok().build();
    }

}