'use client'
import { dynamic } from "@/app/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type promise = {
    url:string
}
export default function ({ params }: dynamic) {
    const router = useRouter()
    const [value,setvalue]= useState<promise>()
    useEffect(() => {
        const value = axios(`https://jsonplaceholder.typicode.com/photos/${params.name}`).then(a=>setvalue(a.data))
        
    }, [])
    return (
        <div>
            {(value === undefined ? '...caregando':<button onClick={() => router.back()}>voltar</button>)}
            <img src={value?.url} alt="cor" />
        </div>
        
    )
}