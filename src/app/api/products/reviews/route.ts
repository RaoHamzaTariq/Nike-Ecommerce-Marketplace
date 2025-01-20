// Import necessary modules
import { client } from '@/sanity/lib/client'; // Adjust this import based on your project structure
import { NextRequest, NextResponse } from 'next/server';

// Define the POST function to handle incoming review submissions
export async function POST(req: NextRequest) {
  const { reviewDetails, productId } = await req.json(); // Extract review details and product ID from request body

  try {
    // Update the product document with the new review
    const data = await client.patch(productId) // Specify the product ID to update
      .setIfMissing({ reviews: [] }) // Ensure that the reviews array exists
      .append('reviews', [reviewDetails]) // Append the new review details to the reviews array
      .commit(); // Commit the changes

    return NextResponse.json({ data }, { status: 200 }); // Return success response with updated data
  } catch (error) {
    console.error('Error adding review:', error); // Log any errors for debugging
    return NextResponse.json({ error: 'Failed to add review' }, { status: 500 }); // Return error response
  }
}
