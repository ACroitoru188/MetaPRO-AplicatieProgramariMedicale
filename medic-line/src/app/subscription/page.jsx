"use client";
import React, { useState } from "react";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
import "./styles.css";

const subscriptions = [
    {
        name: "Radiografie",
        description: "Abonament pentru radiografii, valabil pentru 1 luna.",
        price: "150 RON",
        image: "/subscription/radiografie.jpg",
    },
    {
        name: "Analize de sange",
        description: "Abonament pentru analize de sange, valabil pentru 1 luna.",
        price: "100 RON",
        image: "/subscription/analize-sange.jpg",
    },
    {
        name: "Pachet complet",
        description: "Abonament pentru radiografii si analize de sange, valabil pentru 1 luna.",
        price: "220 RON",
        image: "/subscription/pachet-complet.jpg",
    },
];

export default function SubscriptionPage() {
    const [selectedSubscription, setSelectedSubscription] = useState(null);

    const handleBuyNow = (subscription) => {
        setSelectedSubscription(subscription);
    };

    return (
        <div>
            <Navbar />
            <main className="subscription-container">
                <h1>Abonamente radiografii si analize de sange</h1>
                <div className="subscriptions-grid">
                    {subscriptions.map((subscription, index) => (
                        <div
                            key={index}
                            className="subscription-card"
                            onClick={() => handleBuyNow(subscription)}
                        >
                            <img src={subscription.image} alt={subscription.name} className="subscription-image" />
                            <h2>{subscription.name}</h2>
                            <p>{subscription.description}</p>
                            <p><strong>{subscription.price}</strong></p>
                            <button className="buy-now-button">Cumpara acum</button>
                        </div>
                    ))}
                </div>

                {selectedSubscription && (
                    <div className="payment-modal">
                        <div className="payment-modal-content">
                            <h2>Plateste pentru {selectedSubscription.name}</h2>
                            <p>Pret: {selectedSubscription.price}</p>
                            <form className="payment-form">
                                <label>
                                    Nume complet:
                                    <input type="text" placeholder="Introduceti numele complet" />
                                </label>
                                <label>
                                    Numar card:
                                    <input type="text" placeholder="Introduceti numarul cardului" />
                                </label>
                                <label>
                                    Data expirarii:
                                    <input type="text" placeholder="LL/AA" />
                                </label>
                                <label>
                                    CVV:
                                    <input type="text" placeholder="Introduceti CVV-ul" />
                                </label>
                                <button type="submit" className="payment-submit-button">Finalizeaza plata</button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
