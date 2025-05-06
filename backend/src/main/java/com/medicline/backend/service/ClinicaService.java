package com.medicline.backend.service;

import com.medicline.backend.model.Clinica;
import com.medicline.backend.repository.ClinicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClinicaService {

    @Autowired
    private ClinicaRepository clinicaRepository;


    public Clinica saveClinica(Clinica clinica) {
        return clinicaRepository.save(clinica);
    }


    public List<Clinica> getAllClinics() {
        return clinicaRepository.findAll();
    }


    public Optional<Clinica> getClinicaById(Long id) {
        return clinicaRepository.findById(id);
    }


    public Clinica updateClinica(Long id, Clinica clinicaNoua) {
        Clinica clinica = clinicaRepository.findById(id).orElseThrow(() -> new RuntimeException("Clinica not found"));
        clinica.setNume(clinicaNoua.getNume());
        clinica.setAdresa(clinicaNoua.getAdresa());
        clinica.setTelefon(clinicaNoua.getTelefon());
        clinica.setEmail(clinicaNoua.getEmail());
        clinica.setOras(clinicaNoua.getOras());
        return clinicaRepository.save(clinica);
    }


    public void deleteClinica(Long id) {
        clinicaRepository.deleteById(id);
    }
}