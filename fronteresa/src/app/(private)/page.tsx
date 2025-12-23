"use cache";

import { cacheLife } from "next/cache";

async function handleRequest() {
  const res = await fetch("http://localhost:1992/show-news", {
    cache: "force-cache",
  });

  return res.json();
}

interface Noticia {
  id: string;
  title: string;
  summary: string;
  author: string;
  body: string;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  image5: string | null;
  newsType: string;
}

export default async function Page() {
  cacheLife("default");

  const data = await handleRequest();
  console.log(data);

  return (
    <div>
      <h1>Sexo</h1>
      {data.map((item: Noticia) => (
        <div className="flex py-6" style={{flexDirection: "column", alignItems: "center"}} key={item.id}>
          <h1>{item.title}</h1>
          <p style={{justifySelf: "left"}} className="py-6">{item.summary}</p>
          <hr style={{width: "50%"}} />
        </div>
      ))}
    </div>
  );
}
