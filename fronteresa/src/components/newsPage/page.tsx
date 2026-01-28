"use client";

import Image from "next/image";
import { News } from "@/types/NewsPanel";

interface NewsPageProps {
  news: News;
}

function NewsPage({ news }: NewsPageProps) {
  const getNewsTypeLabel = (type: News["newstype"]) => {
    const labels = {
      noticia: "Notícia",
      cronica: "Crônica",
      poema: "Poema",
      tirinha: "Tirinha",
    };
    return labels[type];
  };



  return (
    <article className="min-h-screen bg-var(--background)] text-var(--text)]">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">


        {/* Cabeçalho */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-var(--destaques)] text-var(--background)] text-sm font-medium rounded-full">
              {getNewsTypeLabel(news.newstype)}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-var(--titulo)] mb-4 leading-tight">
            {news.title}
          </h1>

          <p className="text-xl text-var(--text)] opacity-90 leading-relaxed">
            {news.summary}
          </p>
        </header>

        {/* Corpo da Notícia */}
        <div className="prose prose-lg max-w-none mb-8">
          <div
            className="text-var(--text)] leading-relaxed whitespace-pre-wrap"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            {news.body}
          </div>
        </div>

        {/* Imagens Adicionais */}
  
        {/* Rodapé - Autor */}
        <footer className="mt-12 pt-8 border-t-2 border-var(--bordas)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-var(--text)] opacity-70 mb-1">
                Escrito por
              </p>
              <p className="text-lg font-semibold text-var(--titulo)]">
                {news.author}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default NewsPage;
