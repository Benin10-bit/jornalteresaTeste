"use client"

import { useParams } from "next/navigation";

export default function NewsPage() {
    const params = useParams<{ id:string }>()
    console.log(params)
    return(
        <h1>{ params.id }  aaa</h1>
    )
   
}