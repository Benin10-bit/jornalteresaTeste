import LoadingGrid from "@/components/loadingGrid/page";
import TestePage from "@/components/catalogContent/page";
import { Suspense } from "react";
import Image from "next/image";
import Header from "@/components/ui/header/page";

export default function CatalogPage() {
  return (
    <div className="space-y-8">
      <Header />
      <div className="relative w-[96vw] m-auto mb-4 h-170 border-t border-b border-(--bordas)">
        <Image
          src="/Jornal_dark.png"
          alt="Logo do Jornal Teresa"
          fill
          className="object-contain"
        />
      </div>

      <Suspense fallback={<LoadingGrid quantity={12} />}>
        <TestePage />
      </Suspense>
    </div>
  );
}
