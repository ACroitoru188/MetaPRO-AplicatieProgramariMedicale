"use client";
import Link from "next/link";
import Footer from "./Footer";
import "./styles.css";

export default function Home() {
    return (
        <div className="home-wrapper">
            <nav className="navbar">
                <ul>
                    <li><Link href="/simptoms">Simptome</Link></li>
                    <li><Link href="/clinics">Clinici</Link></li>
                    <li><Link href="/about">Despre noi</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/glosar">Glosar afectiuni</Link></li>
                    <li><Link href="/subscription">Abonamente</Link></li>
                </ul>
            </nav>

            <div className="video-section">
                <video autoPlay muted loop className="background-video">
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="overlay-content">
                    <div className="left-content">
                        <h1>MedicLine</h1>
                        <p>
                            Platforma ta modernă pentru programări medicale. Rapid, sigur și eficient – ai grijă de sănătatea ta cu un singur click.
                        </p>
                    </div>
                    <div className="right-buttons">
                        <Link href="/login" className="home-button">Log In</Link>
                        <Link href="/register-specialist" className="home-button">Register Specialist</Link>
                        <Link href="/register" className="home-button">Register</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
