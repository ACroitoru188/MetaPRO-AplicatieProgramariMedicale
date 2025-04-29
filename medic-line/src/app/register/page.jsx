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

    const onSubmit = (data) => {
        console.log("Register:", data);
    };

    return (
        <div className="container">
            <h1>Creare Cont</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nume complet</label>
                    <input {...register("name", { required: "Numele este obligatoriu" })} />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

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
                                message: "Parola trebuie să aiba cel puțin 6 caractere",
                            },
                        })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <div>
                    <label>Confirmare parola</label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirmarea este obligatorie",
                            validate: (value) =>
                                value === watch("password") || "Parolele nu coincid",
                        })}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                </div>

                <button type="submit">Inregistreaza-te</button>
            </form>
        </div>
    );
}
