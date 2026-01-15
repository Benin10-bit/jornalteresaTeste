"use client";

import { LoadingGridProps } from "@/types/LoadingGridProps";
import { LoadingCard } from "../ui/loaders/loadingCard/page";
import { LoadingFeaturedCard } from "../ui/loaders/loadingFeaturedCard/page";

export default function LoadingGrid({ quantity = 4 }: LoadingGridProps) {
  return (
    <div className="flex justify-center transition-all items-center flex-col">
      <LoadingFeaturedCard />
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
