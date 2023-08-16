"use client"

import { useEffect, useState } from "react"


function Products({ data }) {
    return (
      <>
        {
          data?.products?.map((v, i) => {
            return (
              <p key={i}>{v.title}</p>
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