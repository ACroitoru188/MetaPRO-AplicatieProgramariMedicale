package com.medicline.backend.service;

import com.medicline.backend.model.Appointment;
import com.medicline.backend.model.Client;
import com.medicline.backend.model.Specialist;
import com.medicline.backend.repository.AppointmentRepository;
import com.medicline.backend.repository.ClientRepository;
import com.medicline.backend.repository.SpecialistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private SpecialistRepository specialistRepository;

    public Appointment createAppointment(Appointment appointment, Long clientId, Long specialistId) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Clientul nu există"));

        Specialist specialist = specialistRepository.findById(specialistId)
                .orElseThrow(() -> new RuntimeException("Specialistul nu există"));

        appointment.setClient(client);
        appointment.setSpecialist(specialist);
        appointment.setStatus("în așteptare");

        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAppointmentsByClientId(Long clientId) {
        return appointmentRepository.findByClientId(clientId);
    }

    public List<Appointment> getAppointmentsBySpecialistId(Long specialistId) {
        return appointmentRepository.findBySpecialistId(specialistId);
    }

    
    public Appointment updateStatus(Long id, String newStatus) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Programarea nu există"));

        appointment.setStatus(newStatus);
        return appointmentRepository.save(appointment);
    }
}
