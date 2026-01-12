"use client";

import { LoadingGridProps } from "@/types/LoadingGridProps";
import { LoadingCard } from "../ui/loadingCard/page";

export default function LoadingGrid({ quantity = 4 }: LoadingGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-16
        justify-items-center
        w-full
        max-w-6xl
        mx-auto
      "
    >
      {Array.from({ length: quantity }).map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
}
