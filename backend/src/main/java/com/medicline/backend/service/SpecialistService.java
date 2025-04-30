package com.medicline.backend.service;

import com.medicline.backend.model.Clinica;
import com.medicline.backend.model.Specialist;
import com.medicline.backend.repository.ClinicaRepository;
import com.medicline.backend.repository.SpecialistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecialistService {

    @Autowired
    private SpecialistRepository specialistRepository;

    @Autowired
    private ClinicaRepository clinicaRepository;

    // 🔹 Înregistrare specialist cu verificare clinică
    public Specialist registerSpecialist(Specialist specialist, String clinicaNume) {
        Clinica clinica = clinicaRepository.findByNume(clinicaNume);
        if (clinica == null) {
            throw new RuntimeException("Această clinică nu există!");
        }

        specialist.setClinica(clinica);
        return specialistRepository.save(specialist);
    }

    // 🔹 Autentificare simplă
    public Specialist loginSpecialist(String username, String password) {
        Specialist found = specialistRepository.findByUsername(username);
        if (found != null && found.getPassword().equals(password)) {
            return found;
        }
        return null;
    }

    // 🔹 Aducere specialist după ID (inclusiv clinica)
    public Optional<Specialist> getById(Long id) {
        return specialistRepository.findById(id);
    }

    // 🔹 Aducere toți specialiștii
    public List<Specialist> getAllSpecialists() {
        return specialistRepository.findAll();
    }

    // 🔹 Aducere specialiști după clinica ID
    public List<Specialist> getSpecialistsByClinicaId(Long clinicaId) {
        return specialistRepository.findByClinicaId(clinicaId);
    }
}
