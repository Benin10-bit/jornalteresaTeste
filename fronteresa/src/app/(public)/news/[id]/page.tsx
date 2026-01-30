import { Suspense } from "react";
import Spinner from "@/components/ui/loaders/Spinner/page";
import { searchNewsActions } from "@/actions/SearchNews/searchNewsActions";
import NewsDetail from "@/components/newsPage/page";

export default async function News({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  const noticia = searchNewsActions(resolvedParams.id);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <NewsDetail news={await noticia} />
      </Suspense>
    </div>
  );
}
