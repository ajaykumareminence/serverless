"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
export default function Page({ params }) {
    const [loading, setLoading] = useState(false)

    const [loading1, setLoading1] = useState(false)
    const [data, setData] = useState({})
    async function get() {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/products/' + params.id).then((res) => res.json()).catch((err) => false);
        setData(response)
        setLoading(false)
    }
     useEffect(() => {
        get()
    }, [])
    return (
        <>
        <p onClick={()=>{setLoading1(x=>!x)}}>click</p>
            {
                loading
                    ?
                    'loading'
                    :
                    data
                        ?
                        <>
                            <p>{data?.title}</p>
                            <Image alt={`aitt${data?.id}`} height={250} width={250}  src={data?.thumbnail}  />
                        </>
                        :
                        'product not found'
            }
        </>
    )
}