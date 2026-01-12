import LoadingGrid from "@/components/loadingGrid/page";
import TestePage from "@/components/testepage/page";
import { Suspense } from "react";

export default function NewsPage() {
  return (
    <Suspense fallback={<LoadingGrid quantity={4} />}>
      <TestePage />
    </Suspense>
  );
}
