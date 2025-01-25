"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const AddComment = ({ productId }: { productId: string }) => {
  const { isSignedIn, user } = useUser()
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{ rating: number ; comment: string}>();

  const onSubmit = async (data: { rating: number; comment: string }) => {
    const customerName = user?.fullName
    const { rating, comment } = data;
    if(isSignedIn){
      try {
        console.log(productId,customerName,comment,rating)
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${API_URL}/api/products?query=reviews`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({customerName, rating, comment, productId }),
        });
        
     
        if (!res.ok) {
          throw new Error("Failed to add comment");
        }
  
        reset();
      } catch (error) {
        console.error("An error occurred while adding the comment:", error);
        setError("Failed to submit your comment. Please try again.");
      }
    }else{
      setError("You have to be signed in to add a comment");
      console.log("You have to be signed in to add a comment")
      router.push("/login")
    }
   
  };

  return (
    <div className="mt-14">
      <p>
        Leave a rating and comment{" "}
        <span role="img" aria-label="star">⭐</span>
      </p>

      {error && <p className="text-red-600">{error}</p>}

      <form
        className="flex flex-col border dark:border-purple-950 shadow-sm rounded px-8 pt-6 pb-6 mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="rating">Rating (1–5)</label>
        <select
          id="rating"
          {...register("rating", { required: true, valueAsNumber: true })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        >
          <option value="">Select rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 && "s"}
            </option>
          ))}
        </select>
        {errors.rating && (
          <p className="text-red-600 text-xs">Rating is required.</p>
        )}
        

        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          {...register("comment", { required: true, minLength: 2 })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.comment && (
          <p className="text-red-600 text-xs">Minimum 2 characters required.</p>
        )}

        <input
          className={`cursor-pointer bg-purple-500 text-white rounded py-2 hover:bg-purple-600 ${
            isSubmitting ? "opacity-50" : ""
          }`}
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddComment;
