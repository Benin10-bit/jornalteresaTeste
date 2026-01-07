"use client";

function SignupForm() {
  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="relative px-4 py-10 mx-8 md:mx-0 rounded-3xl sm:p-10
                   bg-(--cards) text-(--text) shadow-(--shadow)"
      >
        <div className="max-w-md mx-auto">
          {/* Inputs principais */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="firstName"
                className="font-semibold text-sm text-(--titulo) pb-1 block"
              >
                Nome
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full text-sm px-3 py-2 mt-1 mb-5 rounded-lg
                           bg-(--input) text-(--text) border border-(--bordas)
                           focus:border-(--botoes) focus:ring-2 focus:ring-(--botoes)
                           outline-none"
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
                type="text"
                className="w-full text-sm px-3 py-2 mt-1 mb-5 rounded-lg
                           bg-(--input) text-(--text) border border-(--bordas)
                           focus:border-(--botoes) focus:ring-2 focus:ring-(--botoes)
                           outline-none"
              />
            </div>




            <div>
              <label
                htmlFor="email"
                className="font-semibold text-sm text-(--titulo) pb-1 block"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full text-sm px-3 py-2 mt-1 mb-5 rounded-lg
                           bg-(--input) text-(--text) border border-(--bordas)
                           focus:border-(--botoes) focus:ring-2 focus:ring-(--botoes)
                           outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="font-semibold text-sm text-(--titulo) pb-1 block"
              >
                Nome de usuário
              </label>
              <input
                id="username"
                type="text"
                className="w-full text-sm px-3 py-2 mt-1 mb-5 rounded-lg
                           bg-(--input) text-(--text) border border-(--bordas)
                           focus:border-(--botoes) focus:ring-2 focus:ring-(--botoes)
                           outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="font-semibold text-sm text-(--titulo) pb-1 block"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                className="w-full text-sm px-3 py-2 mt-1 mb-5 rounded-lg
                           bg-(--input) text-(--text) border border-(--bordas)
                           focus:border-(--botoes) focus:ring-2 focus:ring-(--botoes)
                           outline-none"
              />
            </div>
          </div>

          {/* Data e gênero */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="dob"
                className="font-semibold text-sm text-(--titulo) pb-1 block"
              >
               Nascimento
               </label>
              <input
                id="dob"
                type="date"
                className="w-full text-sm px-3 py-2 mt-1 mb-5 rounded-lg
                           bg-(--input) text-(--text) border border-(--bordas)
                           focus:border-(--botoes) focus:ring-2 focus:ring-(--botoes)
                           outline-none"
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
                className="w-full text-sm px-3 py-2 mt-1 mb-5 rounded-lg
                           bg-(--input) text-(--text) border border-(--bordas)
                           focus:border-(--botoes) focus:ring-2 focus:ring-(--botoes)
                           outline-none"
              >
                <option>Masculino</option>
                <option>Feminino</option>
                <option>Outro</option>
              </select>
            </div>
          </div>

          {/* Botão principal */}
          <div className="mt-5">
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg font-semibold
                         bg-(--botoes) text-(--background)
                         hover:bg-(--hover)
                         focus:ring-2 focus:ring-(--botoes)
                         shadow-(--shadow)
                         transition"
            >
              Registrar
            </button>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-(--bordas)" />
            <a
              href="#"
              className="text-[15px] text-(--links) hover:underline"
            >
              Tem uma conta? Entre
            </a>
            <span className="w-1/5 border-b border-(--bordas)" />
          </div>
        </div>
      </div>
    </div>
  );
}
export { SignupForm };
