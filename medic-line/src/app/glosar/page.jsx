"use client";
import React, { useState } from "react";
import Navbar from "@/app/navbar";
import "./styles.css";

const conditions = [
    {name: "Osteoporoza", description: "Osteoporoza este o afecțiune care face oasele fragile și mai susceptibile la fracturi."},
    {name: "Gastrita", description: "Gastrita reprezintă inflamația mucoasei stomacului, care poate cauza dureri abdominale și indigestie."},
    {name: "Poliartrita", description: "Poliartrita este o boală autoimună care provoacă inflamații ale articulațiilor, afectând mișcarea."},
    {name: "Ulcerul duodenal", description: "Ulcerul duodenal este o leziune deschisă pe mucoasa duodenului, care poate cauza dureri abdominale și indigestie."},
    {name: "Colon iritabil", description: "Colonul iritabil este o afecțiune ce afectează tractul gastrointestinal, cauzând crampe, balonare și diaree sau constipație."},
    {name: "Tuberculoza", description: "Tuberculoza este o infecție bacteriană care afectează de obicei plămânii, dar poate afecta și alte părți ale corpului."},
    {name: "Fibrilatie atriala", description: "Fibrilația atrială este o tulburare de ritm cardiac care poate cauza palpitații, oboseală și un risc crescut de accident vascular cerebral."},
    {name: "Boala pilonidala", description: "Boala pilonidală apare atunci când un abces sau o infecție se formează la baza coloanei vertebrale, adesea în apropierea zonei de contact cu scaunul."},
    {name: "Tinitus", description: "Tinitus este o afecțiune în care o persoană percepe sunete în ureche, chiar și atunci când nu există niciun zgomot extern."},
];

export default function Glosar() {
    const [selectedCondition, setSelectedCondition] = useState(null);

    const handleConditionClick = (name) => {
        setSelectedCondition(name);
    };

    const selectedConditionDetails = conditions.find(
        (condition) => condition.name === selectedCondition
    );

    return (
        <div>
            <Navbar />
            <main className="glossary-container">
                <h1>Glosar de afectiuni medicale</h1>
                <div className="conditions-grid">
                    {conditions.map((condition, index) => (
                        <div
                            key={index}
                            className="condition-card"
                            onClick={() => handleConditionClick(condition.name)}
                        >
                            <h2>{condition.name}</h2>
                        </div>
                    ))}
                </div>

                {selectedConditionDetails && (
                    <div className="condition-details">
                        <h2>{selectedConditionDetails.name}</h2>
                        <p>{selectedConditionDetails.description}</p>
                    </div>
                )}
            </main>
        </div>
    );
}
