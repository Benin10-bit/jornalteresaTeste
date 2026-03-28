"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { PainelAdmin } from "@/components/painelAdmin/page";
import { isAdminActions } from "@/actions/isAdminActions/isAdminActions";
import Spinner from "@/components/ui/loaders/Spinner/page";

export default function Painel() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const isAdminResponse = await isAdminActions();
      setIsLoading(false);
      if (!isAdminResponse) redirect('/');
      setIsAdmin(true);
    })();
  }, []);
  

  if (!isLoading && isAdmin) return <PainelAdmin />

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <Spinner size={100} circleColor="#4b6b57" partialCircleColor="#91a98f" />
      <h1 className="text-2xl">Carregando...</h1>
    </div>
  )
}
