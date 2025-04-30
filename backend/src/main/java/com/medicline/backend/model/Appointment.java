package com.medicline.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Legătură către Client
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    // Legătură către Specialist
    @ManyToOne
    @JoinColumn(name = "specialist_id")
    private Specialist specialist;

    private LocalDateTime dataOra; // Data și ora programării
    private String tip; // "fizic" sau "video"
    private String status; // "în așteptare", "confirmată", etc.
    private String linkVideo; // opțional

    // Getteri și setteri
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Client getClient() { return client; }
    public void setClient(Client client) { this.client = client; }

    public Specialist getSpecialist() { return specialist; }
    public void setSpecialist(Specialist specialist) { this.specialist = specialist; }

    public LocalDateTime getDataOra() { return dataOra; }
    public void setDataOra(LocalDateTime dataOra) { this.dataOra = dataOra; }

    public String getTip() { return tip; }
    public void setTip(String tip) { this.tip = tip; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getLinkVideo() { return linkVideo; }
    public void setLinkVideo(String linkVideo) { this.linkVideo = linkVideo; }
}
