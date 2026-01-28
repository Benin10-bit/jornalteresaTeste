import { Suspense } from "react";
import NewsServer from "./server";

export default async function News({ 
  params
 }: {
  params: Promise<{id: string}>
}) {
  const resolvedParams = await params;
  console.log(resolvedParams)
  
  return (
        <div>
            <NewsServer id={resolvedParams.id} />
        </div>
  );
}
