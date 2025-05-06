package com.medicline.backend.controller;

import com.medicline.backend.model.Afectiune;
import com.medicline.backend.repository.AfectiuneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/afectiuni")
public class AfectiuneController {

    @Autowired
    private AfectiuneRepository afectiuneRepository;

    @PostMapping
    public ResponseEntity<Afectiune> create(@RequestBody Afectiune afectiune) {
        return ResponseEntity.ok(afectiuneRepository.save(afectiune));
    }
}
