

// components/content/page.tsx
import { catalogActions } from "@/actions/CatalogActions/catalogActions";
import NewsClient from "./NewsClient";
import { News } from "@/types/NewsType";
import { delay } from "@/lib/delay";

export default async function TestePage() {
  const news = await catalogActions(); // erro → error.tsx
  await delay(30000)
  return <NewsClient initialNews={news} />;
}
