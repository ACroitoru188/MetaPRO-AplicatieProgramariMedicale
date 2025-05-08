"use client";
import { useForm } from "react-hook-form";
import "../globals.css";

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: data.email,
                    password: data.password,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                const token = result.token;

                localStorage.setItem("token", token);

                alert("Autentificare reusits!");
                window.location.href = "/dashboard";
            } else {
                const errorMsg = await response.text();
                alert("Eroare la autentificare: " + errorMsg);
            }
        } catch (error) {
            alert("Eroare retea: " + error.message);
        }
    };

    return (
        <div className="container">
            <h1>Autentificare</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input {...register("email", { required: "Email-ul este obligatoriu" })} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div>
                    <label>Parola</label>
                    <input
                        type="password"
                        {...register("password", { required: "Parola este obligatorie" })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <button type="submit">Autentificare</button>
            </form>
        </div>
    );
}
