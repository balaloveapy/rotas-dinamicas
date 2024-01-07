'use client'
import {dynamic} from "@/app/input"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"

type option = {
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
export default function page({ params }: dynamic) {
    const [value, setvalue] = useState<option[]>()
    const router = useRouter()
    useEffect(() => {
        json()
    }, [])
    function json() {
        const req = axios(`https://jsonplaceholder.typicode.com/albums/${params.name}/photos`).then((a) => setvalue(a.data))

    }
    return (
        <div>
            {(value === undefined ? '...caregando' :
                <button onClick={()=>router.back()}>voltar</button>)}
            <main>
                <div style={{ display: "grid", gridTemplateColumns: 'repeat(5,150px)', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
                    {value && value.map((a) =>
                    (
                        <a key={a.id} href={`../photo/${a.id}`}>
                            <section className="grid cursor-pointer">
                                <img src={a.thumbnailUrl} alt="" />
                            </section>
                        </a>))}
                </div>
            </main>
        </div>
    )
}