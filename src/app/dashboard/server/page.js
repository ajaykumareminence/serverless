import Link from "next/link";
function Products({ data }) {
  return (
    <>
      {
        data?.products?.map((v, i) => {
          return (
            <p key={i}><Link href={`/dashboard/server/${v.id}`} >{v.title}</Link></p>
          )
        })
      }
    </>
  )
}

export default async function Page() {
  const data = await fetch('https://dummyjson.com/products').then((res) => res.json()).catch((err) => false);
  return (
    <>
      {data ?
        <Products data={data} />
        :
        <p>No data</p>
      }
    </>
  )
}