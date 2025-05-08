"use client";
import React, { useState } from 'react';
import './styles.css';

const clinics = [
    {
        name: "Clinica Sanitas",
        address: "Str. Exemplu 1, București",
        phone: "+40 123 456 789",
        image: "https://via.placeholder.com/150",
        departments: ["Cardiologie", "Dermatologie", "Pediatrie"],
        medics: [
            { name: "Dr. Popescu Ana", department: "Cardiologie" },
            { name: "Dr. Ionescu Vlad", department: "Dermatologie" },
            { name: "Dr. Georgescu Elena", department: "Pediatrie" },
        ]
    },
    {
        name: "Clinica Medlife",
        address: "Str. Exemplu 2, București",
        phone: "+40 987 654 321",
        image: "https://via.placeholder.com/150",
        departments: ["Ortopedie", "Neurologie"],
        medics: [
            { name: "Dr. Mihai Adrian", department: "Ortopedie" },
            { name: "Dr. Stoica Raluca", department: "Neurologie" },
        ]
    },
    {
        name: "Clinica Regina Maria",
        address: "Str. Exemplu 3, București",
        phone: "+40 112 233 445",
        image: "https://via.placeholder.com/150",
        departments: ["Ginecologie", "Endocrinologie"],
        medics: [
            { name: "Dr. Radu Bianca", department: "Ginecologie" },
            { name: "Dr. Dima Tudor", department: "Endocrinologie" },
        ]
    },
    {
        name: "Clinica Spitalul Clinic",
        address: "Str. Exemplu 4, București",
        phone: "+40 556 667 788",
        image: "https://via.placeholder.com/150",
        departments: ["Psihiatrie", "Reumatologie"],
        medics: [
            { name: "Dr. Ilie Maria", department: "Psihiatrie" },
            { name: "Dr. Pavel Ion", department: "Reumatologie" },
        ]
    },
];

const Clinics = () => {
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedMedic, setSelectedMedic] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const openModal = (clinic) => {
        setSelectedClinic(clinic);
        setShowModal(true);
        setSelectedMedic('');
        setSelectedDate('');
        setSelectedTime('');
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedClinic(null);
    };

    const handleAppointment = (e) => {
        e.preventDefault();
        alert(`Programare trimisă la ${selectedClinic.name} cu ${selectedMedic} pentru data de ${selectedDate} la ora ${selectedTime}`);
        closeModal();
    };

    return (
        <div className="clinics-container">
            <h1>Clinici Medicale</h1>
            <div className="clinics-list">
                {clinics.map((clinic, index) => (
                    <div key={index} className="clinic-card">
                        <div className="clinic-left">
                            <img src={clinic.image} alt={clinic.name} />
                        </div>
                        <div className="clinic-middle">
                            <h2>{clinic.name}</h2>
                            <p><strong>Adresa:</strong> {clinic.address}</p>
                            <p><strong>Telefon:</strong> {clinic.phone}</p>
                            <button onClick={() => openModal(clinic)}>Programează-te</button>
                        </div>
                        <div className="clinic-departments">
                            <h4>Departamente:</h4>
                            <ul>
                                {clinic.departments.map((dep, i) => (
                                    <li key={i}>{dep}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedClinic && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Programare la {selectedClinic.name}</h2>
                        <form onSubmit={handleAppointment}>
                            <label>Alege medicul:</label>
                            <select
                                required
                                value={selectedMedic}
                                onChange={(e) => setSelectedMedic(e.target.value)}
                            >
                                <option value="">-- Selectează medicul --</option>
                                {selectedClinic.medics.map((medic, idx) => (
                                    <option key={idx} value={`${medic.name} (${medic.department})`}>
                                        {medic.name} ({medic.department})
                                    </option>
                                ))}
                            </select>

                            <label>Alege data:</label>
                            <input
                                type="date"
                                required
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />

                            <label>Alege ora:</label>
                            <input
                                type="time"
                                required
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                            />

                            <div className="modal-buttons">
                                <button type="submit">Confirmă programarea</button>
                                <button type="button" onClick={closeModal}>Anulează</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Clinics;
