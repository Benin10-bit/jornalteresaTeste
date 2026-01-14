

// components/content/page.tsx
import { catalogActions } from "@/actions/CatalogActions/catalogActions";
import NewsClient from "./NewsClient";
import { News } from "@/types/NewsType";

export default async function TestePage() {
  const news = await catalogActions(); // erro → error.tsx

  console.log(news[0])

  return <NewsClient initialNews={news} />;
}
