package com.medicline.backend.dto;

public class SignupSpecialistRequest {

    private String username;
    private String password;
    private String telefon;
    private String rol;
    private String clinicaNume; // 🔥 înlocuiește clinicaId cu acesta

    // Getters și Setters
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getTelefon() { return telefon; }
    public void setTelefon(String telefon) { this.telefon = telefon; }

    public String getRol() { return rol; }
    public void setRol(String rol) { this.rol = rol; }

    public String getClinicaNume() { return clinicaNume; }  // ✅ aici era problema
    public void setClinicaNume(String clinicaNume) { this.clinicaNume = clinicaNume; }
}
