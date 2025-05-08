"use client";
import "./styles.css";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

export default function About() {
    return (
        <div>
            <Navbar />
            <section className={"container"}>
                <h1>Despre MedicLine</h1>
                <p>
                    <strong>MedicLine</strong> este o platformă modernă care facilitează programările online la clinici medicale din toată țara.
                    Ne dorim să simplificăm accesul la servicii medicale, eliminând timpii de așteptare și birocrația inutilă.
                </p>
                <p>
                    Printr-o interfață intuitivă, utilizatorii pot căuta clinici, alege specializări și face programări în doar câteva clicuri.
                    MedicLine colaborează cu medici de top și clinici acreditate pentru a oferi servicii de înaltă calitate.
                </p>
                <p>
                    Platforma este dezvoltată în jurul valorilor de <strong>siguranță</strong>, <strong>rapiditate</strong> și <strong>accesibilitate</strong>,
                    oferind pacienților controlul asupra propriei sănătăți, direct din confortul casei lor.
                </p>
            </section>

            <section className={"doctorsSection"}>
                <h2>Medicii nostri parteneri</h2>
                <div className={"doctorsGrid"}>
                    <img src="/doctors/images.jpeg" width={200} height={200} alt="Dr. Popescu"/>
                    <img src="/doctors/What_are_the_Challenges_of_Being_a_Doctor.webp" width={200} height={200} alt="Dr. Ionescu"/>
                    <img src="/doctors/shutterstock_2173377961-1000x667.jpg" width={200} height={200} alt="Dr. Georgescu"/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
