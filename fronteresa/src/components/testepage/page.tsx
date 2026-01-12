import CardNews from "@/components/ui/CardNews/page";
import { delay } from "@/lib/delay";

const fakeNews = [
  {
    type: "NEW",
    title: "Next.js 15 é anunciado",
    desc: "A nova versão do Next.js traz melhorias significativas em performance, streaming e cache inteligente.",
    author: "Equipe Vercel",
    imgUrl: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    newsUrl: "/news/next-15",
  },
  {
    type: "TECH",
    title: "React Server Components evoluem",
    desc: "Entenda como os Server Components estão mudando a forma de construir aplicações modernas.",
    author: "React Team",
    imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    newsUrl: "/news/react-server-components",
  },
  {
    type: "DESIGN",
    title: "UI minimalista em alta",
    desc: "Designs limpos e funcionais continuam dominando produtos digitais em 2026.",
    author: "UX Collective",
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    newsUrl: "/news/ui-minimalista",
  },
];

export default async function TestePage() {
    await delay(8000)

  return (
    <section className="flex flex-wrap gap-6 justify-center">
      {fakeNews.map((news, index) => (
        <CardNews
          key={index}
          type={news.type}
          title={news.title}
          desc={news.desc}
          author={news.author}
          imgUrl={news.imgUrl}
          newsUrl={news.newsUrl}
        />
      ))}
    </section>
  );
}
