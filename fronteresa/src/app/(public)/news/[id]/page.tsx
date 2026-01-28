import { Suspense } from "react";
import NewsServer from "./server";

export default function News({id}:  {id: string}) {
  return (
    <div>
      <Suspense fallback={<div>Carregando notícia...</div>}>
        <NewsServer params={{id}} />
      </Suspense>
    </div>
  );
}
