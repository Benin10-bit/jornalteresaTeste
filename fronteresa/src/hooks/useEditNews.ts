"use client";

import { toastSuccess, toastError } from "@/lib/toast/toast";
import { editNewsActions } from "@/actions/EditNews/editNewsActions";
import { useState } from "react";

export function useEditNews() {
  const [editloading, setEditLoading] = useState<boolean>(false);

  async function submit(formData: FormData, id: number|string) {
    if (editloading) return;

    try {
      setEditLoading(true);
      await editNewsActions(formData, id);
      toastSuccess("Notícia editada com sucesso!");
    } catch (err) {
      toastError(
        "Erro ao editar notícia " +
          (err instanceof Error ? `(${err.message})` : ""),
      );
    } finally {
      setEditLoading(false);
    }
  }

  return { submit, editloading };
}
export default useEditNews;
