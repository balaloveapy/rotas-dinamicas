'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import { nata } from "./input"
export default function page() {
  const [value, setvalue] = useState<nata[]>()
  async function axioss() {
    const json = await axios('https://jsonplaceholder.typicode.com/albums')
    setvalue(json.data)
  }
  useEffect(() => {

    axioss()
  }, [])
  return (
    <div>
      {value &&
        value.map((a) =>
          <a key={a.id}href={`/albums/${a.id}`}>
            <button className="text-left w-full p-6 my-10 block border-2 border-solid  border-black">{a.title}</button>
          </a>
        )}
    </div>

  )
}