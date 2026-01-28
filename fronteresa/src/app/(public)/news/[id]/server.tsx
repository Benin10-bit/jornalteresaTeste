import { searchNewsActions } from "@/actions/SearchNews/searchNewsActions";
import NewsPage from "@/components/newsPage/page";


export default async function NewsServer(params: {id: string}) {
  console.log('params id abaixo');
    console.log(params.id)
  const noticia = await searchNewsActions(params.id);

  return <NewsPage news={noticia} />;
}
