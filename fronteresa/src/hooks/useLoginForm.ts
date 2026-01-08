"use client";

import { toastSuccess, toastError } from "@/lib/toast";
import { loginAction } from "@/actions/LoginActions/loginActions";
import { useState } from "react";

export function useLoginForm() {
  const [loading, setLoading] = useState(false);

  async function submit(formData: FormData) {
    if (loading) return;

    try {
      setLoading(true);
      await loginAction(formData);
      toastSuccess("Login realizado com sucesso");
    } catch(err) {
      toastError("Email ou senha inválidos " + (err instanceof Error ? `(${err.message})` : ""));
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading };
}
export default useLoginForm;