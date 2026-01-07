"use client";

import { loginAction } from "@/actions/LoginActions/loginActions";
import { toastError, toastSuccess } from "@/lib/toast";
import React from "react";
import toast from "react-hot-toast";


function LoginForm() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try{
      await loginAction(formData);
      toastSuccess('Login realizado com sucesso!');
    } catch (error) {
      toastError('Falha ao realizar login. Verifique suas credênciais.');
    }
  }

  return (
    <div
      className="
        w-md rounded-2xl shadow-(--shadow) h-auto p-10
        bg-(--cards) relative overflow-hidden
      "
    >
      <div className="flex flex-col justify-center items-center space-y-4">
        <h2 className="text-4xl font-medium text-(--titulo)">Entrar</h2>
        <p className="text-lg text-(--text)">Insira as credênciais abaixo.</p>
      </div>

          <form onSubmit={handleSubmit} className="w-full mt-8 space-y-6">
    
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
            
             {/*        <div className="flex items-center justify-between text-base">
            <div className="flex items-center">
              <input
                className="mr-3 w-5 h-5 accent-(--botoes)"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <span className="text-(--text)">Remember me</span>
            </div>
            <a
              className="text-(--links) font-medium hover:underline"
              href="#"
            >
              Esqueceu a senha
            </a>
                    </div> */}
            
                    <button
            className="
              w-full py-3 rounded-lg text-lg font-medium
              bg-(--botoes) text-(--background)
              hover:bg-(--hover)
              ring-2 ring-(--bordas)
              transition-colors
              cursor-pointer
            "
            id="login"
            name="login"
            type="submit"
                    >
            Entrar
                    </button>
            
                    <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b border-(--bordas)" />
              <a
                href="#"
                className="text-md text-(--links) hover:underline"
              >
                Tem uma conta? Entre
              </a>
              <span className="w-1/5 border-b border-(--bordas)" />
            </div>
          </form>
        </div>
      
  );
}

export { LoginForm };
