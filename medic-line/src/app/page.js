import Link from "next/link";
import Navbar from "./Navbar";

export default function Home() {
    const buttonStyle = {
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: "#3399cc",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        cursor: "pointer",
        textDecoration: "none",
        display: "inline-block",
    };

    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <Navbar />
            <h1 style={{ color: "darkblue", marginBottom: "30px" }}>MedicLine</h1>

            <div>
                <Link href="/login" style={buttonStyle}>Log In</Link>
                <Link href="/register-specialist" style={buttonStyle}>Register Specialist</Link>
                <Link href="/register" style={buttonStyle}>Register</Link>
            </div>
        </div>
    );
}
