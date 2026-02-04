import json
import psycopg
from psycopg.rows import dict_row

# ==========================
# CONFIGURAÇÃO DO BANCO
# ==========================
DATABASE_URL = "postgresql://neondb_owner:npg_mDO0ElaqhG1A@ep-empty-cell-ahwwb0ny-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# Exemplo Neon:
# postgresql://neondb_owner:senha@ep-cool-name.us-east-2.aws.neon.tech/neondb?sslmode=require


# ==========================
# CARREGAR JSON
# ==========================
with open("noticias.json", "r", encoding="utf-8") as f:
    noticias = json.load(f)


# ==========================
# SQL
# ==========================
SQL_INSERT_NEWS = """
INSERT INTO tb_news (
    id,
    title,
    summary,
    body,
    author,
    created_at,
    newstype,
    curtidas
)
VALUES (
    %(id)s,
    %(title)s,
    %(summary)s,
    %(body)s,
    %(author)s,
    %(created_at)s,
    %(newstype)s,
    %(curtidas)s
)
ON CONFLICT (id) DO NOTHING;
"""

SQL_INSERT_FILES = """
INSERT INTO tb_files (
    id,
    image1,
    image2,
    image3,
    image4,
    image5,
    "noticiaId"
)
VALUES (
    gen_random_uuid(),
    %(image1)s,
    %(image2)s,
    %(image3)s,
    %(image4)s,
    %(image5)s,
    %(noticiaId)s
);
"""

# ==========================
# EXECUÇÃO
# ==========================
def main():
    with psycopg.connect(DATABASE_URL, row_factory=dict_row) as conn:
        with conn.cursor() as cur:
            print("🔹 Inserindo notícias...")

            for item in noticias:
                cur.execute(
                    SQL_INSERT_NEWS,
                    {
                        "id": item["id"],
                        "title": item["title"],
                        "summary": item.get("summary"),
                        "body": item["body"],
                        "author": item.get("author"),
                        "created_at": item["created_at"],
                        "newstype": item.get("newstype"),
                        "curtidas": item.get("curtidas", 0),
                    },
                )

            print("✅ Notícias inseridas")

            print("🔹 Inserindo arquivos...")

            for item in noticias:
                imagens = any(
                    item.get(img) is not None
                    for img in ["image1", "image2", "image3", "image4", "image5"]
                )

                if not imagens:
                    continue

                cur.execute(
                    SQL_INSERT_FILES,
                    {
                        "image1": item.get("image1"),
                        "image2": item.get("image2"),
                        "image3": item.get("image3"),
                        "image4": item.get("image4"),
                        "image5": item.get("image5"),
                        "noticiaId": item["id"],
                    },
                )

            conn.commit()
            print("✅ Arquivos inseridos")
            print("🎉 Importação concluída com sucesso!")


if __name__ == "__main__":
    main()

