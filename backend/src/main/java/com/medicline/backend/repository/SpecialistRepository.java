package com.medicline.backend.repository;

import com.medicline.backend.model.Specialist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpecialistRepository extends JpaRepository<Specialist, Long> {
    Specialist findByUsername(String username);

    // 🔹 Lista de specialiști pentru o clinică
    List<Specialist> findByClinicaId(Long clinicaId);
}
