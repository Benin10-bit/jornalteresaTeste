"use client";

import CardNews from "@/components/ui/CardNews/page";
import { News } from "@/types/NewsType";
import FeaturedNews from "../ui/featuredNews/page";

export default function NewsClient({ initialNews }: { initialNews: News[] }) {
  return (
    <section className="flex flex-wrap gap-6 justify-center">
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
