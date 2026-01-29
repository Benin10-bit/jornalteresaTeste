import { Suspense } from "react";
import NewsServer from "./server";
import Spinner from "@/components/ui/loaders/Spinner/page";

export default async function News({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <NewsServer id={resolvedParams.id} />
      </Suspense>
    </div>
  );
}
