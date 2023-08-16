"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

function Products({ data }) {
    return (
      <>
        {
          data?.products?.map((v, i) => {
            return (
                <p key={i}><Link href={`/dashboard/client/${v.id}`}>{v.title}</Link></p>
            )
          })
        }
      </>
    )
  }
export default function Page() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    async function getData() {
        setLoading(true)
        let response = await fetch('https://dummyjson.com/products').then((res) => res.json()).catch((err) => false);
        setData(response)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {
                loading
                ?
                'loading.......'
                :
                data 
                ?
                <Products data={data}/>
                :
                <p>No data</p>
            }

        </>
    )
}