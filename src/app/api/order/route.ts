import { client } from "@/sanity/lib/client";
import { NextRequest,NextResponse } from "next/server";

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