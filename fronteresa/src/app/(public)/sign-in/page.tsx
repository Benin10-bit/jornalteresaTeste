"use client";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1992/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, senha }),
      });

      if (!res.ok) {
        throw new Error(`Erro HTTP: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Erro no login:", err);
    }
  }

  return (
    <div>
      <h1 className="text-2xl text-white">Login</h1>

      <form className="" onSubmit={handleSubmit}>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
