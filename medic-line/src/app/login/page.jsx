"use client";
import { useForm } from "react-hook-form";
import "../globals.css";

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Login:", data);
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input {...register("email", { required: "Email is required" })} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}
