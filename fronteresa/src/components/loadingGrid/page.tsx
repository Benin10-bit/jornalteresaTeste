"use client";

import { LoadingGridProps } from "@/types/LoadingGridProps";
import { LoadingCard } from "../ui/loaders/loadingCard/page";
import Spinner from "../ui/loaders/Spinner/page";

export default function LoadingGrid({ quantity = 4 }: LoadingGridProps) {
  return (
    <div className="flex justify-center transition-all items-center flex-col">
      <div
        className="mb-4 featuredEffects  flex justify-center items-center bg-(--cards) rounded-3xl border w-[96vw] h-175 border-(--bordas)
"
      >
        <div className="card__shine" />
        <div className="card__glow" />
        <div>
          <Spinner size={50} />
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
