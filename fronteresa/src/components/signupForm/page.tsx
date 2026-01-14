"use client";

import { useRegisterForm } from "@/hooks/useRegisterForm";
import Link from "next/link";
import Spinner from "../ui/loaders/Spinner/page";

function SignupForm() {
  const { submit, loading } = useRegisterForm();
  return (
    <div
      className="
        w-160 rounded-2xl shadow-(--shadow) h-auto p-10
        bg-(--cards) relative overflow-hidden
      "
    >
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-4xl font-medium text-(--titulo)">Registrar</h2>
        <p className="text-lg text-(--text)">Crie sua conta abaixo.</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(new FormData(e.currentTarget));
        }}
        className="w-full mt-8 space-y-6"
      >
        {/* Nome e Sobrenome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="font-semibold text-sm text-(--titulo) pb-1 block"
            >
              Nome
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="
                outline-none border-2 border-(--bordas) rounded-lg
                px-4 py-3 w-full text-lg
                bg-(--input) text-(--text)
                focus:border-(--links)
              "
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="font-semibold text-sm text-(--titulo) pb-1 block"
            >
              Sobrenome
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="
                outline-none border-2 border-(--bordas) rounded-lg
                px-4 py-3 w-full text-lg
                bg-(--input) text-(--text)
                focus:border-(--links)
              "
              placeholder="Digite seu sobrenome"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="font-semibold text-sm text-(--titulo) pb-1 block"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="
              outline-none border-2 border-(--bordas) rounded-lg
              px-4 py-3 w-full text-lg
              bg-(--input) text-(--text)
              focus:border-(--links)
            "
            placeholder="seu@email.com"
          />
        </div>

        {/* Senha */}
        <div>
          <label
            htmlFor="password"
            className="font-semibold text-sm text-(--titulo) pb-1 block"
          >
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="
              outline-none border-2 border-(--bordas) rounded-lg
              px-4 py-3 w-full text-lg
              bg-(--input) text-(--text)
              focus:border-(--links)
            "
            placeholder="Digite sua senha"
          />
        </div>

        {/* Data de Nascimento e Gênero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="dob"
              className="font-semibold text-sm text-(--titulo) pb-1 block"
            >
              Nascimento
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              className="
                outline-none border-2 border-(--bordas) rounded-lg
                px-4 py-3 w-full text-lg
                bg-(--input) text-(--text)
                focus:border-(--links)
              "
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="font-semibold text-sm text-(--titulo) pb-1 block"
            >
              Gênero
            </label>
            <select
              id="gender"
              name="gender"
              className="
                outline-none border-2 border-(--bordas) rounded-lg
                px-4 py-3 w-full text-lg
                bg-(--input) text-(--text)
                focus:border-(--links)
              "
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        {/* Botão de Registro */}
        <button
          className={`
            relative
            w-full py-3 rounded-lg text-lg font-medium
            bg-(--botoes) text-(--background)
            hover:bg-(--hover)
            ring-2 ring-(--bordas)
            transition-colors
            disabled:opacity-60 disabled:cursor-not-allowed
          `}
          id="login"
          name="login"
          type="submit"
          disabled={loading}
          aria-busy={loading}
          aria-disabled={loading}
        >
          <span className={loading ? "opacity-0" : "opacity-100"}>
            Registrar
          </span>

          {loading && (
            <span
              role="status"
              aria-live="polite"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Spinner />
              <span className="sr-only">Carregando...</span>
            </span>
          )}
        </button>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b border-(--bordas)" />
          <Link
            href="/sign-in"
            className="text-md text-(--links) hover:underline"
          >
            Já tem uma conta? Entre
          </Link>
          <span className="w-1/5 border-b border-(--bordas)" />
        </div>
      </form>
    </div>
  );
}

export { SignupForm };
