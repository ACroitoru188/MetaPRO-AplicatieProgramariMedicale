package com.medicline.backend.repository;

import com.medicline.backend.model.Clinica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicaRepository extends JpaRepository<Clinica, Long> {
    // 🔥 Aici adăugăm:
    Clinica findByNume(String nume);
}
