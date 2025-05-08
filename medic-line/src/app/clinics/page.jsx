"use client";
import React, { useState } from 'react';
import './styles.css';
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

const clinics = [
    {
        name: "Policlinica Sanitas",
        address: "Str. Liege 4, Timisoara",
        phone: "0771113640",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEA8QDxAQEA8XEBAVEhAQEBAPEBASFRgYFhgVFhMYHSggGBolGxYXITEhJykrLi4uGB8zODMsNygtLisBCgoKDg0OFxAQFS0dFRkrKystKy0tLSstKystLSsrKysrNysrLTctKystKystLS03Ky0rKzctLSsrLSstLSsrN//AABEIAKUBMgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQMCBQYEB//EAD4QAAIBAwIDBgIIAwYHAAAAAAABAgMREgQhBTFBBiJRYXGBEzIHFCORobHB0TNS8SRCYpKi4RUWQ1NyguL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAdEQEBAAMAAwEBAAAAAAAAAAAAAQIDERIhMQQT/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAYAAAAAAAAAAAAAAAAAMgkAAQSABAAkAAAAAAAAAAAAAAAAAAAAAAAAAgASQSAAAAAAAAAAAAAAACAJBAAAAAAQBKJIAEggASCABIIAEgAAAAAAAAAAAAAAAhkkMkAAAAAAAAAAAAAAEXJK7gZ3IuQjFPr5u4GTkVfWofzx/zI1naDi9OhSbqzUG9o8+b2XLzaPnz4lPf7Sdr3upSt7bnPZn4vPs3TD6+rR1EW7KUW/Jplh8qo9p1pX8Ws5zh17z9Fz9T6Pw3iEa1KFaHySTt97X6GsL5TrevZ5Tse9MXMEyHL25mnSVZcXPNS1UJPuyT9nzM51LJtvp9wOrri55qOqjNZQaa8d9+n6Fk6qT35ePS/gFW3FzC/mvIxjUTV09vEC24ueetqYw+aSW/mZwmnunt4l4Lbi5VGqnezvbnYSqJWv1dl5vwILbi5S6lldtL2Dqft6MC64uVTmkt3YnLwdwLLi55vrkMnHJZcsd73LnIIzuLlcJppNO68TIKybCMTJASAAAAAAAAAAAAAFNy480mO8S3jMxqSsr9LHJcZ7YqhWlTwvZ87f7ngq9u7ramn5Nf/Rj+uMrhl+iRyfEuIvU8WlTq/JTpVbRbteTpxknfbqjz/Fd7cn1X+5ru0WlnKv9c015S5zUbt2SirNJcrJ9SdFx2lWsqv2FZ7O+MKPu27839yLv13bj3F5N98/cbzhVBVpOnJXT5+12vyPpvZLTunpKNOXOMZXX/tJ/qfNOEat0Kiq2VSHRw70JbPk9vE6aj27iuVPazs7Lf/Ucdd/nOZN6NnhOV3v52K9S+5K/gziF2/Vvk6dV1/zG94Jx6Oopzm0oqPNPZWbfn5HXDbjl8enDbMr6aXsdwypnS1ErwXwZQ55Z3knk/wCV7WsbLtW06mlhVT+D8W87Xs1jLZtcuhVp+0kfhuem01adCPJxpqUZK17wcZWaNloNXS1tHJ03jk4yp1YruySTd0m/Gx3tdWqowpw12nem5SjV+NZuUXaKwu3fHqbLtPKy0l7W+uUXe+0ef3nppaOjp4zlCnGm8W3ilHKyb3NdwLitDiWnzwjOCkljJRaUrJ8k30kOd9joKNZSipJqUU3utzT9lpP4TTbvv085GzoUY04YQgkv5aa2+45mHbDT0tStJUp1KM3a0pxhCneyaTble/eXQknRKpU6urqrU7ySlhlJ04/Cy23Vle99uZ0PDoU40rUfkUpWW73vvzPPxPQ0qkXOdGFZrdJxU8mt9jw9muO06znTo0KtOMG1eUIxhldppNN8mi8XqezOpiqmpi5d5zhaL/8AFGfaWX23Dkr76yKe2yWEzV8a41ptHXjnpKkqs5RUZ0aUHnJ2Su3JN72NvxXiUIaZautSm1CPxVTcV8SMrX5N7OztzJw6w7bXeiqpbSyo2a3/AOpA071FWnX0+nrZNxqU1CaV1KOa3dlZbsz4j2ypxpRlqNFrFTdudGKjzVuc/Fosq9qI5UHLRatRlVp01OdBKCzlbJSy5efka4jZdr5P6vLne29t/uPdxSclppY/Nivu6/hcvqQhOKTWUbXV0nY0+k7SUqurq6NWygo2W3eTjk+vT0M8OvN2f0ul+Fpp3vP7PFOUlNT5q8b3XubftFr/AIGnnOKbqWWCtzbaXh4NinwfTxqOrGjDNvLLFXvtvf2PHxvi9KFSFF05V673jCEVNwTV7tXuk0n9w4da/sNqKkM9LWTut4SatdO8n080dhkcvoONxlq4UKmnq06zhUlCc6ajHGKWSi279V0OluSxYzyLIcihsvp8kZVkAAAAAAAAAAAAAHjk+fjuew8LlzfUM5fHyrtY/wC1VNurNNb2l0R9L4j2bp1Zucl3n6/ueSXZGlZ7evP9zx56blXz9mi2964CE2uW3iuj9jz63htGvdziqdV/LUisYK/+CPmztIcG0841sF3qa7y35tNra/kck/G3W5fPPV676cMpdbRzeo0Uk7upQd7Sk017RbbXNdDfOUZQhOFsJq8Nuidn+JKgpQqQn8kksr9LO6/E3fYTgCraSnKpHmnbnyvK53yk24ddccf6TsaBu97pcvL7zsuytB1NJWgnjJ2s1tfvSNh/yfR2SW3vy+82Gn0cdJRm4Rula638X+5y06fGumrTcb9cV2d7TT4fGGh4jS+GlZQqXi048t1DJvdv7j6JwZ0XTz0+9OcnN2uk3JJ7JpW6Gh1Gv02q0jnUcbShJ/Cv9plZ2WN0/wCph9HeklR01RSWMZamrOCd1ajLHBO/LY99+PZHq7d8QwoxpKVqlScbc/kjKOf+lnL9ktVT0fEqulhL+z1cpwXespOUIL02RsHVhrOJyU7OlRSUFfafxKavZrwcfM8vb7hcKCo6milGrSrQlaLcsoxyk1v5mpeTivpKn7eDPmvabgi1WtrRV1UjFShJOzvGnFrf1SO14BxONehSmn38IuSezTsr7epz2m1kP+K1Yt847O3d/hx5PkzOM4K+wvaOTvodXLHUU+7G6bc4xxje6vzd+psexkEvrDSs3Wq+nzy3Nf237OuajqtPtqqO8f8AHipSX4vwLvo4rynp5TqRcJ5zU8rp3Umr2aXNgeL6Sl9tw6/TV6a1tr/bQ5nb19LGpCUJq8ZKzi97JnB/STXXx9Akt46ig523slVi22+mx32mrKUYyi7qyd+lmS/BxP0qU8dCktrToq3gvi0rHT6PRxqUKSmrpNSXhkm7HLfSxUX1RQW83Upv2VWm/wArnXcFqqVCm1a1ujvvd8/AsvoZ8U1q0+nnVfyQj4eDSPlFef1apo9bGb+NnUjW+bdVJRhG/pFs67t3r4zlptEn/FqONWS3ioYye8um8fI9PHOz9GelmrKPdvld847rr5CI6nT6hTgpxfdkrrZ8mfPu1i1Ol1711Km61J0qcJxygnFRys1k9nea5Loe76M+M56eOmqXVWlaCbVsoxUVt7yNvW47BaqemqJRtCMozk8YtyvdXe21vxJB5eznaHSa6cZ0nbUQUk6bUnKmpc+9ik7pJ7HVnzvVcPpy4pp6mljuo1Pi1I3lBvuW7265Jn0G+zvzsTJqM2z00uSPG5Hro/KjFaWAAgAAAAAAAAAAAa25sjVNliM8iuq+6/EXIv4moj5XxCWs0+rr1KVOc6FWylGKk1G0FG7V0urZrr7rw6I+qcS0idOeMbtxdt0unmfOf+D1/wDt9du9T/c8n6cblfTwfqwtvpXwzhz1FRUlLBSe+7Wyu/DyPqfC9IqVONOmsYpNW2XNt9PU4nsrw2rCvGU4WW/WL6Pwfmd9fb3RvR2Tjr+XC4z2tVlb16+PgeXiVdQpSlJXjtde68S9Pl63KdRTUoOMt03+p6JHq5Gg0UdDJRqOlRpSbWDnCnFt9OXmjdR1NG8aOdPOSVoJrddNvY8mr4PTmoLkoyVrX6blq4bDOM7WcYpJ732/qa6ijQw0sbVqcaUHdqLcYq7u4u9j16yjQqtxnGlOSluppS73h+JjHhsEo93k3tltu7oxpcOSrSqq95Xdr7J7fsRV1KjR08W0oU483KyjFeV/Aq0mh082qtKFN87TjGN3vbZ+xdr9KqkJU5XSa/W/T0MdBpY0qcIR5K/j4t/qOi6vqaeWEpxU8e7C+/k2jzUtTQpRvKVOnGUpeCyae9vPcmpooSq/Fd7rbr43PLreDU6ijGV3aUnHvNfMOidVT01SpL4saUpLeUmotJK17t+R7+H16UoWoSi6a7iwaxVkttvKx56vDovPu/NGS+bfdWJ4Pw+Gng4Quk5OTu293ZP8i0Y8Ro6edSEa8aUpu+MJqLcrLeyfgrMz0Wq08FKnTnSSjCUpQjZJJLdteCMNVw+E6lOq73hn1f8AeViihwWEZTkk3lCcX3nupbP8hBNSGikvjv4LV2srRcU+u/uemtqaM1CnJwlCak4uNnG1Pd8zzz4LTcPhJPF783zf9CyhwmEVBJPuKaXef9/mTor0lPSQynT+Cmk5OcFFNJWbk39xjq46Oso1p/VqkLtKpJRleS2av5XJp8FpxjUSTtOMovvP5WiqPAKSpKlZ4qTku8+cufUo9mnlpqU3Ti6dObtanHGLXqvf8TZp8ttzSvg8HUVXdS9W/D9jbJq+z6eZn6qzI92n+VGsNlpfkj6EotABlQAAAAAAAAAADTuW7NwaKT3fqaxSs3INldycjSdZS3K3Rj4GTkMicS+0RgluixMwyIyHF+Ti1SIuV5C4RbkRlyK8hcKtbX7sN+3n1K8hkUWZe4yKsibgWDIryGRBYn5bi/uVZDIosv0vtsTf38SrIZAWbfsL+XsV5DInBanyVrWIK7k5FFmRFzDIjICy5tNJ8kfT9TT5G30XyR9P1M5EXgAy0AAAAAAAAAAAc/KW79WdAc3J7v1ZrFKzyGRXcXNIsyGRXcXAsyGRXcXAsyGRXcXAsyGRXcXAzuLmFxcCzIZFdxcCzIZFdxcCzIZFdxcCzIZFdxcCzIZFdxcCzIi5hcXAzuTkV3FwLMjc6F/Zx9H+Zorm84f/AA4ej/MzksekAGVAAAAAAAAAAAOXlzfqzqDlJy3fqzWKVkCvIZG0WAryGQFgK8hkBYCvIZAWC5XkLgWAryGQGdxcryGQFouV5ByAzuTcqyJUgLAV5DICwFeQyAsuRcwyIyAtuCrInICy50HDv4UPR/mzm8jo+Gfwoej/ADZnJY9QAMKAAAAAAAAAAAchPm/Vkg1ilYgA2yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHS8K/g0/R/mwDOSx6wAYaAAAAAH//Z",
        departments: ["Pneumologie", "Obstetrica-Ginecologie", "Dermatovenorologie", "Medicina interna", "Endocrinologie", "Medicina muncii", "Stomatologie"],
        medics: [
            {name: "Dr. Mihaescu Virginia", department: "Pneumologie"},
            {name: "Dr. Sirbu Daniela", department: "Obstetrica-Ginecologie"},
            {name: "Dr. Varsandan Giannina", department: "Dermatovenorologie"},
            {name: "Dr. Iana Andreea", department: "Medicina interna"},
            {name: "Dr. Filimon Liliana", department: "Medicina muncii"},
            {name: "Dr. Stiru Daniela", department: "Endocrinologie"},
            {name: "Dr. Moscal Andrei", department: "Stomatologie"},

        ]
    },
    {
        name: "Clinica Medlife",
        address: "Str. Marinei 2, București",
        phone: "+40 987 654 321",
        image: "data:image/jpeg;base64,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",
        departments: ["Ortopedie", "Neurologie"],
        medics: [
            {name: "Dr. Mihai Adrian", department: "Ortopedie"},
            {name: "Dr. Stoica Raluca", department: "Neurologie"},
        ]
    },
    {
        name: "Regina Maria",
        address: "Str. Iubirii 22, București",
        phone: "+40 112 233 445",
        image: "data:image/jpeg;base64,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",
        departments: ["Ginecologie", "Endocrinologie"],
        medics: [
            {name: "Dr. Radu Bianca", department: "Ginecologie"},
            {name: "Dr. Dima Tudor", department: "Endocrinologie"},
        ]
    },
    {
        name: "Spitalul Clinic Sanador",
        address: "Str. Sperantei 4, București",
        phone: "+40 556 667 788",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwVMX6Z6dH6vuVIaN1rX0akjkoG3xpIuIdg&s",
        departments: ["Psihiatrie", "Reumatologie"],
        medics: [
            {name: "Dr. Ilie Maria", department: "Psihiatrie"},
            {name: "Dr. Pavel Ion", department: "Reumatologie"},
        ]
    },
];

const Clinics = () => {
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedMedic, setSelectedMedic] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const openModal = (clinic) => {
        setSelectedClinic(clinic);
        setShowModal(true);
        setSelectedMedic('');
        setSelectedDate('');
        setSelectedTime('');
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedClinic(null);
    };

    const handleAppointment = (e) => {
        e.preventDefault();
        alert("Programarea a fost facuta!");
        closeModal();
    };

    return (
        <div className="clinics-container">
            <Navbar />
            <h1>Clinici Medicale</h1>
            <div className="clinics-list">
                {clinics.map((clinic, index) => (
                    <div key={index} className="clinic-card">
                        <div className="clinic-left">
                            <img src={clinic.image} alt={clinic.name} />
                        </div>
                        <div className="clinic-middle">
                            <h2>{clinic.name}</h2>
                            <p><strong>Adresa:</strong> {clinic.address}</p>
                            <p><strong>Telefon:</strong> {clinic.phone}</p>
                            <button onClick={() => openModal(clinic)}>Programeaza-te</button>
                        </div>
                        <div className="clinic-departments">
                            <h4>Departamente:</h4>
                            <ul>
                                {clinic.departments.map((dep, i) => (
                                    <li key={i}>{dep}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedClinic && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Programare la {selectedClinic.name}</h2>
                        <form onSubmit={handleAppointment}>
                            <label>Alege medicul:</label>
                            <select
                                required
                                value={selectedMedic}
                                onChange={(e) => setSelectedMedic(e.target.value)}
                            >
                                <option value="">-- Selecteaza medicul --</option>
                                {selectedClinic.medics.map((medic, idx) => (
                                    <option key={idx} value={`${medic.name} (${medic.department})`}>
                                        {medic.name} ({medic.department})
                                    </option>
                                ))}
                            </select>

                            <label>Alege data:</label>
                            <input
                                type="date"
                                required
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />

                            <label>Alege ora:</label>
                            <input
                                type="time"
                                required
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                            />

                            <div className="modal-buttons">
                                <button type="submit">Confirma programarea</button>
                                <button type="button" onClick={closeModal}>Anuleaza</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Clinics;
