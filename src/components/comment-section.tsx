"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Star, Send } from 'lucide-react'

type ReviewFormData = {
  rating: number;
  comment: string;
};

const AddComment = ({ productId }: { productId: string }) => {
  const { isSignedIn, user } = useUser()
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormData>({
    defaultValues: {
      rating: 0,
      comment: ''
    }
  });

  const onSubmit = async (data: ReviewFormData) => {
    const customerName = user?.fullName || 'Anonymous';
    const { rating, comment } = data;

    if (isSignedIn) {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${API_URL}/api/products?query=reviews`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            customerName, 
            rating, 
            comment, 
            productId 
          }),
        });
        
        if (!res.ok) {
          throw new Error("Failed to add comment");
        }
  
        reset();
      } catch (error) {
        console.error("An error occurred while adding the comment:", error);
        setError("Failed to submit your comment. Please try again.");
      }
    } else {
      setError("You have to be signed in to add a comment");
      router.push("/login")
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex items-center space-x-3">
        <Star className="text-yellow-500 w-6 h-6" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Share Your Experience
        </h3>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg">
          {error}
        </div>
      )}

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-4"
      >
        {/* Star Rating Input */}
        <div className="space-y-2">
          <label 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Your Rating
          </label>
          <Controller
            name="rating"
            control={control}
            rules={{ required: true, min: 1, max: 5 }}
            render={({ field: { value, onChange } }) => (
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      onChange(num);
                      setValue('rating', num);
                    }}
                    className={`
                      transition-colors duration-200 
                      ${value >= num 
                        ? 'text-yellow-500' 
                        : 'text-gray-300 hover:text-yellow-300'
                      }
                    `}
                  >
                    <Star 
                      className="w-6 h-6" 
                      fill={value >= num ? 'currentColor' : 'transparent'} 
                    />
                  </button>
                ))}
              </div>
            )}
          />
          {errors.rating && (
            <p className="text-red-500 text-sm">Rating is required</p>
          )}
        </div>

        {/* Comment Textarea */}
        <div className="space-y-2">
          <label 
            htmlFor="comment" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Your Comment
          </label>
          <textarea
            id="comment"
            {...register("comment", { 
              required: true, 
              minLength: {
                value: 2,
                message: "Comment must be at least 2 characters long"
              }
            })}
            className="
              w-full 
              px-3 py-2 
              border border-gray-300 
              dark:border-gray-700 
              rounded-lg 
              focus:ring-2 focus:ring-gray-700 
              bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-200
            "
            rows={4}
            placeholder="Share your thoughts about the product..."
          />
          {errors.comment && (
            <p className="text-red-500 text-sm">
              {errors.comment.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full 
            flex items-center justify-center 
            space-x-2
            py-3 
            bg-black
            text-white 
            rounded-lg 
            hover:bg-gray-800 
            transition-colors 
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <Send className="w-5 h-5" />
          <span>{isSubmitting ? 'Submitting...' : 'Submit Review'}</span>
        </button>
      </form>
    </div>
  );
};

export default AddComment;
