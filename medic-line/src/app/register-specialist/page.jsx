"use client";
import { useForm } from "react-hook-form";
import "../globals.css";

export default function RegisterSpecialist() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Specialist Registration:", data);
    };

    return (
        <div className="container">
            <h1>Inregistrare specialist</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nume specialist</label>
                    <input {...register("name", { required: true })} />
                    {errors.name && <p className="error">Acest camp este obligatoriu</p>}
                </div>

                <div>
                    <label>Email</label>
                    <input {...register("email", { required: true })} />
                </div>

                <div>
                    <label>Telefon</label>
                    <input {...register("phone")} />
                </div>

                <div>
                    <label>Adresa</label>
                    <input {...register("address")} />
                </div>

                <div>
                    <label>Descriere</label>
                    <textarea rows="3" {...register("description")} />
                </div>

                <button type="submit">Inregsitreaza</button>
            </form>
        </div>
    );
}
