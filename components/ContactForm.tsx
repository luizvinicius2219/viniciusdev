"use client";

import { FormEvent, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    if (!API_URL) {
      setStatus("error");
      setMessage("Backend ainda não configurado. Use o e-mail direto enquanto isso.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch(`${API_URL.replace(/\/$/, "")}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Falha ao enviar");
      form.reset();
      setStatus("success");
      setMessage("Mensagem enviada. Obrigado pelo contato.");
    } catch {
      setStatus("error");
      setMessage("Não consegui enviar agora. Você pode usar o e-mail ao lado.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-grid">
        <label>
          <span>Nome</span>
          <input name="name" required minLength={2} maxLength={120} placeholder="Seu nome" />
        </label>
        <label>
          <span>E-mail</span>
          <input name="email" type="email" required maxLength={180} placeholder="voce@empresa.com" />
        </label>
      </div>
      <label>
        <span>Assunto</span>
        <input name="subject" required minLength={3} maxLength={180} placeholder="Projeto, oportunidade ou ideia" />
      </label>
      <label>
        <span>Mensagem</span>
        <textarea name="message" required minLength={10} maxLength={4000} rows={6} placeholder="Conte um pouco sobre o que você quer construir." />
      </label>
      <button className="button button--primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>
      {message && <p className={`form-status form-status--${status}`}>{message}</p>}
    </form>
  );
}
