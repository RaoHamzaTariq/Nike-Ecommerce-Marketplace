'use server'
import { User } from "@/data/interfaces";
import { currentUser } from "@clerk/nextjs/server";

const fetchUserData = async () => {
  try {
    const user = await currentUser();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register?email=${user?.emailAddresses[0]?.emailAddress}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user id");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const addToWishlist = async (productId: string) => {
  try {
    const userData: User = await fetchUserData();
    const existingWishlist = userData.wishList || [];

    // Check if the product ID already exists in the wishlist
    if (existingWishlist.some((item) => item._ref === productId)) {
      console.log("Product is already in the wishlist.");
      return;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register?query=wishlist`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, userId: userData?._id }),
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const productData = await response.json();
    console.log(productData.message);
  } catch (error) {
    console.log(error);
  }
};



export const removeFromWishlist = async (productId: string) => {
  try {
    const userData: User = await fetchUserData();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register?query=wishlist`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, userId: userData?._id }),
    });
    if (!response.ok) {
      throw new Error(`Failed to remove from wishlist: ${response.status}`);
    }
    const productData = await response.json();
    console.log(productData.message);
  } catch (error) {
    console.log(error);
  }
};
