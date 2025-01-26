'use server'
import { User } from "@/data/interfaces";
import { currentUser } from "@clerk/nextjs/server";

export const addToWhishlist = async (productId:string) =>{

    const user = await currentUser() 

    const fetchUserData = async()=>{
try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register?email=${user?.emailAddresses[0]?.emailAddress}`)
    if(!response.ok){
        throw new Error("Failed to fetch user id")
    }    
    const data = await response.json()
    return data.data
} catch (error) {
    console.error(error)
}
    }
        

    try {
        const userData:User = await fetchUserData()
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register?query=wishlist`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId, userId: userData?._id })
        })
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`); 
          }
          const productData = await response.json()
          console.log(productData.message)

    } catch (error) {
        console.log(error)
    }
}