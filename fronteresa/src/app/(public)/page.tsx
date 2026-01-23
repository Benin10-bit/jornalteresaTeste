import TestePage from "@/components/catalogContent/page";
import { HeroComponent } from "@/components/heroComponent/page";
import LoadingGrid from "@/components/loadingGrid/page";
import Header from "@/components/ui/header/page";
import { Suspense } from "react";

export default function CatalogPage() {
  return (
    <div>
      <Header />
      <div className="mt-8">
        <HeroComponent />
      </div>
      <Suspense fallback={<LoadingGrid quantity={12} />}>
        <TestePage />
      </Suspense>
    </div>
  );
}
