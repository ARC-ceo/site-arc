'use client'

import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React, { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar envio via email API, como EmailJS, Formspree, etc.
        console.log(form);
        setSubmitted(true);
    };

    return (
        <div>
            <Nav />
            
            <section className="py-16 px-4 max-w-3xl mx-auto">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Tem uma ideia, projeto ou dúvida? Preencha o formulário e entraremos em contato com você o mais breve possível.
                    </p>
                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                value={form.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                ) : (
                    <div className="text-center text-green-600 font-medium text-lg">
                        Obrigado pelo contato! Responderemos em breve.
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
}
