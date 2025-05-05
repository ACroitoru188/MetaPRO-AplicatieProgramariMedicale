package com.medicline.backend.dto;

import java.time.LocalDateTime;

public class AppointmentRequest {

    private Long clientId;
    private Long specialistId;
    private LocalDateTime dataOra;
    private String tip; // "video" sau "fizic"
    private String linkVideo;


    public Long getClientId() { return clientId; }
    public void setClientId(Long clientId) { this.clientId = clientId; }

    public Long getSpecialistId() { return specialistId; }
    public void setSpecialistId(Long specialistId) { this.specialistId = specialistId; }

    public LocalDateTime getDataOra() { return dataOra; }
    public void setDataOra(LocalDateTime dataOra) { this.dataOra = dataOra; }

    public String getTip() { return tip; }
    public void setTip(String tip) { this.tip = tip; }

    public String getLinkVideo() { return linkVideo; }
    public void setLinkVideo(String linkVideo) { this.linkVideo = linkVideo; }
}
