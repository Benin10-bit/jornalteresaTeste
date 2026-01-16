"use client";

import useLoginForm from "@/hooks/useLoginForm";
import Spinner from "../ui/loaders/Spinner/page";
import Link from "next/link";
import { delayedReload } from "@/lib/delayedReload";
import Image from "next/image";

function LoginForm() {
  const { submit, loading } = useLoginForm();

  return (
    <div
      className="
        w-lg rounded-2xl shadow-(--shadow) h-auto p-10
        bg-(--cards) relative overflow-hidden
      "
    >
      <div className="flex justify-center items-center space-y-2">
        <div className="relative w-40 h-40">
          <Image src={"/logo_teresa.png"} fill alt="logo teresa" />
        </div>
        <hr className="border mr-4.5 rotate-90 w-10 border-(--bordas)" />
        <div>
          <h2 className="text-4xl font-medium text-(--titulo)">Entrar</h2>
          <p className="text-lg text-(--text)">Insira as credênciais abaixo.</p>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(new FormData(e.currentTarget));
          delayedReload();
        }}
        className="w-full mt-8 space-y-6"
      >
        <div>
          <input
            className="
                outline-none border-2 border-(--bordas) rounded-lg
                px-4 py-3 w-full text-lg
                bg-(--input) text-(--text)
                focus:border-(--links)
              "
            placeholder="Email"
            id="email"
            name="email"
            type="email"
          />
        </div>

        <div>
          <input
            className="
                outline-none border-2 border-(--bordas) rounded-lg
                px-4 py-3 w-full text-lg
                bg-(--input) text-(--text)
                focus:border-(--links)
              "
            placeholder="Senha"
            id="password"
            name="password"
            type="password"
          />
        </div>

        <div className="flex items-center justify-between text-base">
          <div className="flex items-center">
            <input
              className="mr-3 w-5 h-5 accent-(--botoes)"
              id="remember"
              name="remember"
              type="checkbox"
            />
            <span className="text-(--text)">Remember me</span>
          </div>
        </div>

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
          <span className={loading ? "opacity-0" : "opacity-100"}>Entrar</span>

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

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b border-(--bordas)" />
          <Link
            href="/sign-up"
            className="text-[15px] text-(--links) hover:underline"
          >
            Não tem uma conta? Crie uma!
          </Link>
          <span className="w-1/5 border-b border-(--bordas)" />
        </div>
      </form>
    </div>
  );
}

export { LoginForm };
