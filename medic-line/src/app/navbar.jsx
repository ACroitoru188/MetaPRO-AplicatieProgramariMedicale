"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: "1rem",
                borderBottomLeftRadius: "8px",
            }}
        >
            <ul
                style={{
                    display: "flex",
                    gap: "1rem",
                    listStyleType: "none",
                    margin: 0,
                    padding: 0,
                }}
            >
                <li>
                    <Link href="/login">Log In</Link>
                </li>
                <li>
                    <Link href="/register-specialist">Register Specialist</Link>
                </li>
                <li>
                    <Link href="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}
