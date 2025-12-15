import { supabase } from "../config/supabase.js";
import path from "path";
import { NewsModel } from "../models/newsModel.js";

const model = new NewsModel();

export class NewsService {
  async createNews(parts) {
    const newsData = {
      title: "",
      summary: "",
      author: "",
      body: "",
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      newsType: "",
    };

    let indexImage = 1;

    try {
      for await (const part of parts) {
        if (part.file) {
          const ext = path.extname(part.filename || ".jpg");
          const filename = `${Date.now()}-${Math.random()
            .toString(36)
            .substring(2, 8)}${ext}`;

          const chunks = [];
          for await (const chunk of part.file) chunks.push(chunk);
          const buffer = Buffer.concat(chunks);

          // Upload para o Supabase
          const { error: uploadError } = await supabase.storage
            .from("imagens-noticias")
            .upload(filename, buffer, {
              contentType: part.mimetype,
              upsert: true,
            });

          if (uploadError) {
            console.error("Erro ao salvar imagem:", uploadError);
            throw new Error("Erro ao salvar imagem");
          }

          const { data: publicData } = supabase.storage
            .from("imagens-noticias")
            .getPublicUrl(filename);

          newsData[`image${indexImage}`] = publicData.publicUrl;
          indexImage++;
        } else if (part.fieldname && part.value) {
          newsData[part.fieldname] = part.value;
        }
      }

      // Criando a notícia
      await model.create(newsData);
      return newsData;
    } catch (err) {
      console.error("Erro ao criar notícia:", err);
      throw new Error("Falha ao criar notícia. Tente novamente mais tarde.");
    }
  }

  async listNews(title) {
    try {
      return await model.list(title);
    } catch (err) {
      console.error("Erro ao listar notícias:", err);
      throw new Error("Não foi possível listar as notícias. Tente novamente.");
    }
  }

  async updateNews(id, data) {
    try {
      await model.update(id, data);
    } catch (err) {
      console.error(`Erro ao atualizar notícia com id ${id}:`, err);
      throw new Error(`Erro ao atualizar notícia com id ${id}. Tente novamente.`);
    }
  }

  async deleteNews(id) {
    try {
      // Tenta buscar a notícia antes
      const news = await model.list(id);
      if (!news || news.length === 0) {
        throw new Error("Notícia não encontrada");
      }

      // Deleta a notícia
      await model.delete(id);

      return news; // retorna o objeto deletado pro controller
    } catch (err) {
      console.error("Erro no Service DELETE:", err);
      throw new Error(err.message || "Erro ao deletar notícia. Tente novamente.");
    }
  }
}
