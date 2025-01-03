// // pages/api/auth/[...nextauth].ts

import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { compare } from 'bcryptjs';
// import { client } from '@/sanity/lib/client';

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (!credentials || !credentials.email || !credentials.password) {
//           // Handle missing credentials gracefully (e.g., return null or throw an error)
//           console.error('Missing credentials');
//           return null;
//         }

//         try {
//           const result = await client.fetch(`
//             *[_type == "user" && email == $email][0]
//           `, { email: credentials.email });

//           if (!result) {
//             return null; // User not found
//           }

//           const isValid = await compare(credentials.password, result.password);

//           if (!isValid) {
//             return null; // Invalid password
//           }

//           return {
//             id: result._id,
//             name: result.name, // Assuming you have a 'name' field in your user schema
//             email: result.email,
//           };
//         } catch (error) {
//           console.error('Error authorizing credentials:', error);
//           return null; // Handle authorization errors appropriately
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/login',
//     signOut: '/joinus',
//   },
//   secret: process.env.NEXTAUTH_SECRET, // Add this to your .env.local file
// });

  export async function POST(req:NextRequest) {
    const { slug } = await req.json();
    try {
      const data = await client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`);
      
      return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 }); 
    }
  }