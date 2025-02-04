import { client } from '@/sanity/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure it's a dynamic API route

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query');

    let data;
    if (query === "name") {
      data = await client.fetch(`*[_type == "product"]{productName,slug}`);
    } else {
      data = await client.fetch(`*[_type == "product"]`);
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
