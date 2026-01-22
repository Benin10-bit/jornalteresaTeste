"use client";

import Header from "@/components/ui/header/page";
import { useParams } from "next/navigation";

export default function NewsPage() {
  const params = useParams<{ id: string }>();
  console.log(params);
  return (
    <div>
      <Header />
      <h1>{params.id} aaa</h1>
    </div>
  );
}
