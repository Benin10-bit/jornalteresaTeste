import { searchNewsActions } from "@/actions/SearchNews/searchNewsActions";
import NewsPage from "@/components/newsPage/page";


export default async function NewsServer({ params }: { params: { id: string } }) {
    console.log('Params recebidos em NewsServer:',  params.id);
  const noticia = await searchNewsActions(params.id  );

  return <NewsPage news={noticia} />;
}
