// app/(private)/error.tsx
"use client";

import {  useEffect } from "react";
import { toastError } from "@/lib/toast";

export default function Error({ reset }: { reset: () => void }) {
  useEffect(() => {
    toastError("Erro ao carregar as notícias");
  }, []);

  return (
    <h1>Não há notícias por enquanto</h1>
  );
}
