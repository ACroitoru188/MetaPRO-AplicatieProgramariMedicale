"use client";
import { useForm } from "react-hook-form";
import "./styles.css";
import {useState} from "react";

export default function SimptomsPage() {
    const [dureriCap, setDureriCap] = useState(false);
    const [febra, setFebra] = useState(false);
    const [tuse, setTuse] = useState(false);
    const [dificultatiRespiratie, setDificultatiRespiratie] = useState(false);
    const [dureriArticulare, setDureriArticulare] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const val = Object.fromEntries(data.entries());
        console.log("Simptoms: ", data);
        alert("Formularul de simptome a fost trimis cu succes!");
    };
    return (
        <div className="formularSimptome">
            <h1>Formular de simptome</h1>
            <form onSubmit={handleSubmit}>
                <label className="checkbox-label">
                    <input type="checkbox" checked={dureriCap} onChange={(e) => setDureriCap(e.target.checked)} />
                    <span>Durere de cap</span>
                </label>

                {dureriCap && (
                    <div className="moreQuestions">
                        <label>De cat timp va doare capul?</label>
                        <select name="timpDurereCap">
                            <option>Mai putin de o ora</option>
                            <option>1-2 ore</option>
                            <option>3-6 ore</option>
                            <option>Mai mult de 6 ore</option>
                        </select>
                        <label>In ce parte a capului resimtiti durerea?</label>
                        <select name="parteDurereCap">
                            <option>Frunte</option>
                            <option>Timpane</option>
                            <option>Partea superioara a capului</option>
                            <option>Partea inferioara a capului</option>
                            <option>Toata zona capului</option>
                        </select>
                        <label>Cum descrieti durerea?</label>
                        <select name="descriereDurere">
                            <option>Pulsanta</option>
                            <option>Ascutita</option>
                            <option>Dureri constante</option>
                            <option>Presiune</option>
                        </select>
                        <label>Care este intensitatea durerii?</label>
                        <select name="intensitateDurere">
                            <option>Usoara</option>
                            <option>Moderata</option>
                            <option>Severa</option>
                        </select>
                        <label>Aveti alte simptome asociate cu durerea de cap?</label>
                        <select name="asociateCuDurereaDeCap">
                            <option>Greata</option>
                            <option>Viziune incetosata</option>
                            <option>Sensibilitate la lumina</option>
                            <option>Dificultati de concentrare</option>
                        </select>
                    </div>
                )}
                <label className="checkbox-label">
                    <input type="checkbox" checked={febra} onChange={(e) => setFebra(e.target.checked)} />
                    <span>Febra</span>
                </label>

                {febra && (
                    <div className="moreQuestions">
                        <label>De cat timp aveti febra?</label>
                        <select name="timpFebra">
                            <option>Mai putin de 24 de ore</option>
                            <option>1-2 zile</option>
                            <option>Mai mult de 2 zile</option>
                        </select>
                    </div>
                )}

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={tuse}
                        onChange={(e) => setTuse(e.target.checked)}
                    />
                    <span>Tuse</span>
                </label>

                {tuse && (
                    <div className="moreQuestions">
                        <label>Este o tuse seaca sau productiva?</label>
                        <select name="tipTuse">
                            <option>Seaca</option>
                            <option>Productiva</option>
                        </select>

                        <label>De cat timp tusiti?</label>
                        <select name="timpTuse">
                            <option>Mai putin de 24h</option>
                            <option>1-2 zile</option>
                            <option>Mai mult de 2 zile</option>
                        </select>
                    </div>
                )}

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={dificultatiRespiratie}
                        onChange={(e) => setDificultatiRespiratie(e.target.checked)}
                    />
                    <span>Dificultati de respiratie</span>
                </label>

                {dificultatiRespiratie && (
                    <div className="moreQuestions">
                        <label>In ce situatie apare dificultatea?</label>
                        <select name="situatieRespiratie">
                            <option>In repaus</option>
                            <option>La efort usor</option>
                            <option>La efort moderat</option>
                        </select>

                        <label>Aveti senzatie de apasare in piept?</label>
                        <select name="apasarePiept">
                            <option>Da</option>
                            <option>Nu</option>
                        </select>
                    </div>
                )}

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={dureriArticulare}
                        onChange={(e) => setDureriArticulare(e.target.checked)}
                    />
                    <span>Dureri articulare</span>
                </label>

                {dureriArticulare && (
                    <div className="moreQuestions">
                        <label>Ce articulatii sunt afectate?</label>
                        <select name="zoneAfectate">
                            <option>Maini</option>
                            <option>Genunchi</option>
                            <option>Coate</option>
                            <option>Umeri</option>
                        </select>

                        <label>Durerea apare in repaus sau la miscare?</label>
                        <select name="durereMiscare">
                            <option>In repaus</option>
                            <option>La miscare</option>
                        </select>
                    </div>
                )}

                <button type="submit">Trimite</button>
            </form>
        </div>
    )
}