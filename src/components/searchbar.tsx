"use client"

import React from "react"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useEffect, useState } from "react"
import { Product } from "@/data/interfaces"
import Link from "next/link"



export default function SearchBar() {

    const [open, setOpen] = React.useState<boolean>(false)
    const [name, setname] = React.useState("")
  
      const [productData, setProductData] = useState<Product[]>([])
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState<string | null>(null); 
    
      useEffect(()=>{
        const fetchData = async() =>{
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?query=name`,{
              cache:'no-cache',      
            })
            if (!response.ok) {
              throw new Error(`Failed to fetch data: ${response.status}`); 
            }
            const data = await response.json()
            setProductData(data.data);
          } catch (error: unknown) { 
            
            if (error instanceof Error) { 
              setError(error.message);
              console.error(error) 
            } else {
              setError('An unexpected error occurred.'); 
            }
          }finally {
            setIsLoading(false);
          }
        }
        fetchData()
      },[])

      if(isLoading){
        return <div className="flex justify-center w-full items-center text-blue-900">Loading...</div>
      }

      if(error){
        return <div className="flex justify-center w-full items-center text-blue-900">{error}</div>
      }


  return (
    <div className="relative w-full sm:max-w-[250px]">
        <Command className="p-0 bg-[#f5f5f5] rounded-xl">
          <CommandInput onClick={()=>{setOpen(true)}} className="text-lg border-none p-2 bg-transparent w-full text-gray-700 outline-none" placeholder="Search..." />
          <CommandList className="absolute z-10 bg-white w-full mt-2 shadow-lg rounded-md">
          <CommandGroup className={`${open==true ? "block" : "hidden"}`}>
            {productData && productData.map((product) => (
              <Link key={product._id} href={`/products/${product.slug.current}`}><CommandItem
              className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                key={product.productName}
                onSelect={(currentname) => {
                  setname(currentname === name ? "" : currentname)
                  setOpen(false)
                }}
              >
                {product.productName}
              </CommandItem></Link>
            ))}
          </CommandGroup>
            
          </CommandList>
        </Command>
        </div>
  )
}
