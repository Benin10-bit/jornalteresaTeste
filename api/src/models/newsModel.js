import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class NewsModel {
  // Listar notícias (com pesquisa opcional)
  async list(search) {
    const noticias = await prisma.noticias.findMany({
      where: search
        ? { title: { contains: search, mode: "insensitive" } }
        : undefined,
      orderBy: { created_at: "desc" }, // ordena por data de criação
    });

    return noticias;
  }

  // Criar nova notícia
  async create(news) {
    await prisma.noticias.create({
      data: {
        title: news.title,
        summary: news.summary ?? null,
        body: news.body,
        author: news.author ?? null,
        image1: news.image1 ?? null,
        image2: news.image2 ?? null,
        image3: news.image3 ?? null,
        image4: news.image4 ?? null,
        image5: news.image5 ?? null,
        newstype: news.newsType ?? null,
      },
    });
  }

  // Atualizar notícia
  async update(id, news) {
    await prisma.noticias.update({
      where: { id },
      data: {
        title: news.title,
        summary: news.summary ?? null,
        body: news.body,
        author: news.author ?? null,
        image1: news.image1 ?? null,
        image2: news.image2 ?? null,
        image3: news.image3 ?? null,
        image4: news.image4 ?? null,
        image5: news.image5 ?? null,
        newstype: news.newsType ?? null,
      },
    });
  }

  // Deletar notícia
  async delete(id) {
    await prisma.noticias.delete({
      where: { id },
    });
  }
}
