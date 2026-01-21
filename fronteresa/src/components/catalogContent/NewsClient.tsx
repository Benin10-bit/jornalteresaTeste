"use client";

import CardNews from "@/components/ui/cards/CardNews/page";
import FeaturedNews from "../ui/cards/featuredNews/page";
import { News } from "@/types/NewsType";

export default function NewsClient({ initialNews }: { initialNews: News[] }) {
  return (
    <section className="cards-container">
      {initialNews.map((noticia) =>
        noticia === initialNews[0] ? (
          <FeaturedNews
            key={noticia.id}
            type={noticia.newstype ?? "geral"}
            title={noticia.title}
            desc={noticia.summary ?? ""}
            author={noticia.author ?? "Anônimo"}
            imgUrl={noticia.arquivos?.[0]?.image1 ?? ""}
            newsUrl={`/news/${noticia.id}`}
          />
        ) : (
          <CardNews
            key={noticia.id}
            type={noticia.newstype ?? "geral"}
            title={noticia.title}
            desc={noticia.summary ?? ""}
            author={noticia.author ?? "Anônimo"}
            imgUrl={noticia.arquivos?.[0]?.image1 ?? ""}
            newsUrl={`/news/${noticia.id}`}
          />
        )
      )}
    </section>
  );
}
