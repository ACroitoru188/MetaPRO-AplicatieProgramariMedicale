package com.medicline.backend.dto;

public class RecomandareResponse {

    private String rol;
    private String specialist;
    private String clinica;

    public RecomandareResponse(String rol, String specialist, String clinica) {
        this.rol = rol;
        this.specialist = specialist;
        this.clinica = clinica;
    }

    public String getRol() {
        return rol;
    }

    public String getSpecialist() {
        return specialist;
    }

    public String getClinica() {
        return clinica;
    }
}
