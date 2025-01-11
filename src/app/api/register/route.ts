import { hash } from 'bcryptjs';
import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
 
  const { email, password, firstName, lastName, dateOfBirth, country, gender } = data;

  try {
    // Validate user input (e.g., email format, password strength)
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Check if the email is already in use
    const existingUser = await client.fetch(`*[_type == "user" && email == $email][0]`, { email });
    
    if (existingUser) {
      return NextResponse.json({ message: 'Email already in use' }, { status: 409 }); // Conflict status
    }

    // Hash the password
    const hashedPassword = await hash(password, 10); // 10 is the salt rounds

    // Create a new user document in Sanity
    const newUser = await client.create({
      _type: 'user',
      email,
      password: hashedPassword,
      firstName,
      lastName,
      dateOfBirth,
      country,
      gender,
    });

    return NextResponse.json({ message: 'Registration successful', newUser }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    
    // Return a more detailed error message if available
    return NextResponse.json({ message: 'Registration failed', error }, { status: 500 });
  }
}



export async function GET() {
  try {
    const data = await client.fetch(`*[_type == "user"]`);
    
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 }); // Return specific error message
  }
}