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

  // Coleta todas as imagens disponíveis
  const allImages: string[] = [];
  news.arquivos.forEach((arquivo) => {
    if (arquivo.image1) allImages.push(arquivo.image1);
    if (arquivo.image2) allImages.push(arquivo.image2);
    if (arquivo.image3) allImages.push(arquivo.image3);
    if (arquivo.image4) allImages.push(arquivo.image4);
    if (arquivo.image5) allImages.push(arquivo.image5);
  });

  return (
    <article className="min-h-screen bg-var(--background)] text-var(--text)]">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Imagem Principal */}
        {allImages.length > 0 && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-var(--shadow)]">
            <div className="relative w-full aspect-video bg-var(--cards)]">
              <Image
                src={allImages[0]}
                alt={news.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

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
        {allImages.length > 1 && (
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-video rounded-lg overflow-hidden shadow-var(--shadow)] bg-var(--cards)]"
              >
                <Image
                  src={image}
                  alt={`${news.title} - Imagem ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

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
