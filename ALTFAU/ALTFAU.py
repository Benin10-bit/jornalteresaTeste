import random
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

NEWS_API_URL = "http://localhost:1992/news/like-news/"

NEWS_ID_ARRAY = [
    "b91d7f0a-b9c2-48e0-b725-b2fb8d02c9d6",
    "bd5ab414-16fe-4875-ada1-2e0d20e625ea",
    "bf0767a7-0b55-49c9-be0a-aabadb6c1afe",
    "c6e94b17-f759-4140-a2b2-5f738e210143",
    "d16c97a7-665f-4f2d-ac37-9c7ef349940b",
    "ee22c5a7-c839-40a2-a32c-6e82803d7377",
    "d8643b80-6507-4c15-8a17-c401f8b699d5",
]

MAX_WORKERS = 10  # não exagera pra não derrubar o backend


def send_like(session: requests.Session, news_id: str):
    try:
        response = session.patch(
        NEWS_API_URL + news_id,
        data={
            "newsId": news_id,
            "action": "like"
        },
        timeout=5,
    )
        return news_id, response.status_code
    except Exception as e:
        return news_id, str(e)


def main():
    with requests.Session() as session:
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            futures = []

            for news_id in NEWS_ID_ARRAY:
                likes = random.randint(100, 600)

                print(f"▶ Enviando {likes} likes para {news_id}")

                for _ in range(likes):
                    futures.append(
                        executor.submit(send_like, session, news_id)
                    )

            for future in as_completed(futures):
                news_id, result = future.result()

                if result == 200:
                    print(f"✅ Like enviado → {news_id}")
                else:
                    print(f"❌ Erro em {news_id}: {result}")


if __name__ == "__main__":
    main()
