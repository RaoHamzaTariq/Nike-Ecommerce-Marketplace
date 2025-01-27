  import { client } from '@/sanity/lib/client';
  import { NextRequest, NextResponse } from 'next/server';
  
  export async function GET(req:NextRequest) {
    try {
      const searchParams = req.nextUrl.searchParams
      const query = searchParams.get('query')
      const slug = searchParams.get('slug')
      const productId = searchParams.get('productid')
      if(slug){
        const data = await client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`);      
      return NextResponse.json({ data }, { status: 200 });
      }
      if(query=="name"){
        const data = await client.fetch(`*[_type == "product"]{productName,slug}`);
      return NextResponse.json({ data }, { status: 200 });
      }
      if(productId){
        const data = await client.fetch(`*[_type == "product" && _id == "${productId}"][0]`);
      return NextResponse.json({ data }, { status: 200 });
      }
      if(query=="category"){
        let data = await client.fetch(`*[_type == "product"]{category}`);
        data = data.map((product: { category: string; })=>product.category)
        data = Array.from(new Set(data))
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


  // Define the POST function to handle incoming review submissions
  export async function PUT(req: NextRequest) {
    const { customerName, rating, comment, productId } = await req.json();
  
    try {
      const searchParams = req.nextUrl.searchParams;
      const query = searchParams.get('query');
  
      // Validate input
      if (!productId || !customerName || !rating) {
        return NextResponse.json({ 
          error: 'Missing required fields' 
        }, { status: 400 });
      }
  
      if (query === "reviews") {
        try {
          const data = await client.patch(productId)
            .setIfMissing({ reviews: [] })
            .append('reviews', [{
              customerName, 
              rating, 
              comment
            }])
            .commit({ autoGenerateArrayKeys: true });
            
          return NextResponse.json({ message:"Sucessfully added review",data }, { status: 200 });
        } catch (patchError) {
          console.error('Sanity Patch Error:', patchError);
          return NextResponse.json({ 
            error: 'Failed to add review',
          }, { status: 500 });
        }
      }
      
      return NextResponse.json({ 
        error: 'Invalid query parameter' 
      }, { status: 400 });
      
    } catch (error) {
      console.error('Unexpected Error:', error);
      return NextResponse.json({ 
        error: 'Unexpected server error',
      }, { status: 500 });
    }
  }
  