import { client } from "@/sanity/lib/client";
import { NextRequest,NextResponse } from "next/server";

const ALL_ORDERS_QUERY = `
  *[_type == "order"] | order(orderDate desc) {
    _id,
    customerName,
    customer_id,
    email,
    completionStatus,
    orderDate,
    paymentStatus,
    productDetails[] {
      quantity,
      "productName": product_id->productName,
      "productPrice": product_id->price,
      "productImage": product_id->image.asset->url,
      "productSubtotal": quantity * product_id->price
    }
  }

`;



export async function GET() {
    try {
    const data = await client.fetch(ALL_ORDERS_QUERY);
      return NextResponse.json({ data }, { status: 200 });
      
    } catch (error) {
      console.error('Error fetching order:', error);
      return NextResponse.json({ error: 'Failed to fetch order' }, { status: 500 }); 
    }
  }


export async function POST(req:NextRequest) {
    const data = await req.json();
    const { customer_id, price, product_id,quantity } = data;
    try {
       const newOrder = await client.create({
        _type: "order",
        customer_id,
        order_date: new Date(),
        price,
        product_id,
        quantity
       }) 
       return NextResponse.json({ message: 'Order successful', newOrder }, { status: 201 });
    } catch (error) {
        console.error('Order error:', error);
        return NextResponse.json({ message: 'Order failed', error }, { status: 500 });
    }
}