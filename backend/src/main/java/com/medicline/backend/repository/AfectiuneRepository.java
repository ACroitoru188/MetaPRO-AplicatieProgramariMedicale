package com.medicline.backend.repository;

import com.medicline.backend.model.Afectiune;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AfectiuneRepository extends JpaRepository<Afectiune, Long> {
    Optional<Afectiune> findByNumeContainingIgnoreCase(String text);
}
