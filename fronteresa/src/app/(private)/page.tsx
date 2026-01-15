import LoadingGrid from "@/components/loadingGrid/page";
import TestePage from "@/components/catalogContent/page";
import { Suspense } from "react";

export default function NewsPage() {
  return (
    <Suspense fallback={<LoadingGrid quantity={6} />}>
      <TestePage />
    </Suspense>
  );
}
