package com.medicline.backend.controller;

import com.medicline.backend.model.Appointment;
import com.medicline.backend.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.medicline.backend.dto.AppointmentRequest;


import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    // 🔹 Creare programare
    @PostMapping
    public ResponseEntity<Appointment> createAppointment(
            @RequestBody AppointmentRequest request) {

        Appointment appointment = new Appointment();
        appointment.setDataOra(request.getDataOra());
        appointment.setTip(request.getTip());
        appointment.setLinkVideo(request.getLinkVideo());

        return ResponseEntity.ok(
                appointmentService.createAppointment(
                        appointment, request.getClientId(), request.getSpecialistId()
                )
        );
    }

    // 🔹 Programările unui client
    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<Appointment>> getByClient(@PathVariable Long clientId) {
        return ResponseEntity.ok(appointmentService.getAppointmentsByClientId(clientId));
    }

    // 🔹 Programările unui specialist
    @GetMapping("/specialist/{specialistId}")
    public ResponseEntity<List<Appointment>> getBySpecialist(@PathVariable Long specialistId) {
        return ResponseEntity.ok(appointmentService.getAppointmentsBySpecialistId(specialistId));
    }
}
