package com.medicline.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "afectiuni")
public class Afectiune {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nume;  //  "durere in piept"
    private String rol;   // "cardiolog"

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNume() { return nume; }
    public void setNume(String nume) { this.nume = nume; }

    public String getRol() { return rol; }
    public void setRol(String rol) { this.rol = rol; }
}
