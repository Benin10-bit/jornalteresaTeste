import { API_MAIN_ROUTE } from "@/constants/apiRoute";

async function editNewsActions(formData: FormData, id: number | string) {
    if (!(formData instanceof FormData)) {
        throw new Error("Payload inválido");
    }

    const response = await fetch(
        API_MAIN_ROUTE + `/news/update-news/${id}`,
        {
            method: "PUT",
            credentials: "include",
            body: formData,
        }
    );

    // Se der certo
    if (response.ok) return response.json();

    // Em caso de erro
    let message = "Falha ao editar notícia";
    try {
        const data = await response.json();
        message += data.message ? `: ${data.message}` : "";
    } catch {
        // resposta não é JSON
    }

    throw new Error(message);

}

export { editNewsActions };
