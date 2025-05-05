"use client";
import { useForm } from "react-hook-form";
import "../globals.css";

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:8080/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: data.email,
                    password: data.password,
                    email: data.email,
                }),
            });

            if (response.ok) {
                alert("Cont creat cu succes! Mergi la autentificare.");
                window.location.href = "/login";
            } else {
                const errorMsg = await response.text();
                alert("Eroare la înregistrare: " + errorMsg);
            }
        } catch (error) {
            alert("Eroare rețea: " + error.message);
        }
    };

    return (
        <div className="container">
            <h1>Creare Cont</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email-ul este obligatoriu",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Email-ul nu este valid",
                            },
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div>
                    <label>Parola</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Parola este obligatorie",
                            minLength: {
                                value: 6,
                                message: "Parola trebuie să aibă cel puțin 6 caractere",
                            },
                        })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <div>
                    <label>Confirmare parolă</label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirmarea este obligatorie",
                            validate: (value) =>
                                value === watch("password") || "Parolele nu coincid",
                        })}
                    />
                    {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <button type="submit">Înregistrează-te</button>
            </form>
        </div>
    );
}
