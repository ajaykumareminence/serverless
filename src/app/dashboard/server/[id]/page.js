import Image from "next/image";
export default async function Page({ params }) {
    const data = await fetch('https://dummyjson.com/products/'+ params.id).then((res) => res.json()).catch((err) => false);
    return (

        <>
            {
                data 
                ?
                <>
                <p>{data.title}</p>
                <Image height={250} width={250} alt={data.title} src={data.thumbnail}/>
                </>
                :
                'product not found'
            }
        </>
    )
}