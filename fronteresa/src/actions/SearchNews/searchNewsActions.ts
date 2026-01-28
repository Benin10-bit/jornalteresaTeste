import { API_MAIN_ROUTE } from "@/constants/apiRoute";

export async function searchNewsActions(id: string) {
  const response = await fetch(API_MAIN_ROUTE + `/news/search-news/${id}`);

  console.log('Response do fetch:', response);

  if (!response.ok) {
    throw new Error("Falha ao buscar notícias");
  }

  return await response.json();
}
