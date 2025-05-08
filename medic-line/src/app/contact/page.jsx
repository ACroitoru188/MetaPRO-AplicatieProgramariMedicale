"use client";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
import "./styles.css";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main className="contact-wrapper">
                <h1>Contacteaza-ne</h1>
                <p>Suntem mereu bucurosi sa te ajutam. Nu ezita sa ne contactezi pentru intrebari, sugestii sau asistenta.</p>

                <div className="contact-grid">
                    <div className="contact-box">
                        <h2>Adresa</h2>
                        <p>Str. Sanatatii nr. 25<br />Brasov, Romania</p>
                    </div>
                    <div className="contact-box">
                        <h2>Email</h2>
                        <p>contact@medicline.ro</p>
                    </div>
                    <div className="contact-box">
                        <h2>Telefon</h2>
                        <p>+40 755 123 456</p>
                    </div>
                    <div className="contact-box">
                        <h2>Program</h2>
                        <p>Luni - Vineri: 08:00 - 18:00<br />Sambata - Duminica: Inchis</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
