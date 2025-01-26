import Image from "next/image";
import Link from "next/link";
import { TbShoppingCart } from "react-icons/tb";
import { auth, currentUser } from '@clerk/nextjs/server'
import { User } from "@/data/interfaces";

// const wishlistData = [
//   {
//     id: "1",
//     productName: "Cozy Hoodie",
//     description: "Stay warm and stylish with this cozy hoodie.",
//     price: 1999,
//     image: "/images/hoodie.png",
//   },
//   {
//     id: "2",
//     productName: "Classic Sneakers",
//     description: "Perfect sneakers for everyday comfort.",
//     price: 2999,
//     image: "/images/sneakers.png",
//   },
//   {
//     id: "3",
//     productName: "Elegant Watch",
//     description: "Add a touch of class to any outfit.",
//     price: 4999,
//     image: "/images/watch.png",
//   },
// ];


export default async function  WishlistPage() {

  const user = await currentUser()

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`,{
        cache: "no-cache"
      })
      if(!response.ok){
        throw new Error("Failed to fetch data")
      }
      const data = await response.json();
    return data.data
    } catch (error) {
      console.error("Error",error)
    }
    
  }

  const data : User[] = await fetchData()
  const userData : User | undefined =  data.find((item: { email: string; }) => item.email === user?.emailAddresses[0].emailAddress)

  return (
    <div className="flex flex-col my-5">
      <h1 className="text-4xl font-medium text-center py-10">My Wishlist</h1>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-10 xl:mx-40 lg:mx-32 md:mx-20 mx-5">
        {/* {userData.wishlist.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-5 bg-white p-5 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
          >
            
            <Image
              src={product.image || "/default-image.png"}
              alt={product.productName}
              className="rounded-lg"
              width={300}
              height={300}
            />

    
            <div className="flex flex-col items-center gap-3 text-center font-poppins">
              <h2 className="text-2xl font-semibold">{product.productName}</h2>
              <h3 className="text-xl font-medium">{`₹ ${product.price}.00`}</h3>

             
              <div className="flex gap-3">
                <Link href="/cart">
                  <button className="bg-[#111111] px-5 py-2 rounded-3xl text-white flex items-center gap-2">
                    <TbShoppingCart />
                    Add to Cart
                  </button>
                </Link>
                <button className="bg-red-500 px-5 py-2 rounded-3xl text-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
