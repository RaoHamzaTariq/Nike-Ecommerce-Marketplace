  import { client } from '@/sanity/lib/client';
  import { NextRequest, NextResponse } from 'next/server';
  
  export async function GET(req:NextRequest) {
    try {
      const searchParams = req.nextUrl.searchParams
      const query = searchParams.get('query')
      const slug = searchParams.get('slug')
      if(slug){
        const data = await client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`);      
      return NextResponse.json({ data }, { status: 200 });
      }
      if(query=="name"){
        const data = await client.fetch(`*[_type == "product"]{productName,slug}`);
      
      return NextResponse.json({ data }, { status: 200 });
      }
    const data = await client.fetch(`*[_type == "product"]`);
      return NextResponse.json({ data }, { status: 200 });
      
    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 }); 
    }
  }

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