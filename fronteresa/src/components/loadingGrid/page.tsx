"use client";

import { LoadingGridProps } from "@/types/LoadingGridProps";
import { LoadingCard } from "../ui/loaders/loadingCard/page";
import Spinner from "../ui/loaders/Spinner/page";

export default function LoadingGrid({ quantity = 4 }: LoadingGridProps) {
  return (
    <div className="flex justify-center transition-all items-center flex-col">
      <div
        style={{ background: "linear-gradient(135deg, var(--destaques) 0%, var(--botoes) 100%)"}}
        className="mb-4 animate-pulse featuredEffects flex justify-center items-center rounded-3xl border w-screen h-175 border-(--bordas)
"
      >
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="flex flex-col justify-center items-center">
          <div>
            <Spinner size={50} />
          </div>
          <p className="text-(--cards) text-center mt-4 text-2xl">
            Carregando notícias...
          </p>
        </div>
      </div>
      <div
        className="
        flex flex-wrap gap-2 justify-center
        "
      >
        {Array.from({ length: quantity }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    </div>
  );
}
