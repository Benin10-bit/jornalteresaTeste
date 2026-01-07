import BotaoTema from "@/components/botaoTema/page";
import { SignupForm } from "@/components/signupForm/page";

export default function Signin() {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen">
      <div className="mb-8">
        <SignupForm />
      </div>
      <BotaoTema />
    </div>
  );
}
