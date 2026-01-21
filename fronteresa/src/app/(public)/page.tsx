import LoadingGrid from "@/components/loadingGrid/page";
import TestePage from "@/components/catalogContent/page";
import { Suspense } from "react";

export default function CatalogPage() {
  return (
      <Suspense fallback={<LoadingGrid quantity={12} />}>
        <TestePage />
      </Suspense>
  );
}
