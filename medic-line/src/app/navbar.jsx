"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: "16px",
                borderBottomLeftRadius: "8px",
            }}
        >
            <ul
                style={{
                    display: "flex",
                    gap: "16px",
                    listStyleType: "none",
                    margin: 0,
                    padding: 0,
                    color: "darkblue",
                    fontWeight: "bold",
                }}
            >
                <li>
                    <Link href="/simptoms">Simptome</Link>
                </li>
                <li>
                    <Link href="/clinics">Clinici</Link>
                </li>
            </ul>
        </nav>
    );
}
