"use client"
import Image from "next/image";
export default function ImageComponent({alt, src, height, width}){
    return(
        <Image alt={alt} src={src} height={height} width={width} priority={true}/>
    )
}