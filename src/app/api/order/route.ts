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


  
  
  export async function POST(req: NextRequest) {
      try {
          // Get the order data from the request body
          const body = await req.json();
          
          // Create customer reference using email
          const customerRef = {
              _type: 'reference',
              _ref: body.email // Using email as customer reference
          };
  
          // 1. Create the order document
          const order = await client.create({
              _type: 'order',
              customer: customerRef,
              customerName: `${body.firstName} ${body.lastName}`,
              email: body.email,
              phoneNumber: body.phoneNumber,
              orderDate: new Date().toISOString(),
              paymentStatus: 'pending',
              orderStatus: 'pending',
              productDetails: body.productDetails.map((item: { product_id: string; quantity: number; }) => ({
                  _type: 'orderItem',
                  product_id: item.product_id,
                  quantity: item.quantity
              })),
              total: body.total
          });
  
          // 2. Create the shipment document
          const shipment = await client.create({
              _type: 'shipment',
              order: {
                  _type: 'reference',
                  _ref: order._id
              },
              shippingStatus: 'pending',
              shippingDate: null,
              address: {
                  _type: 'address',
                  fullAddress: body.fullAddress,
                  city: body.city,
                  state: body.state,
                  country: body.country,
                  postalCode: body.postalCode
              }
          });
  
          // Return success response with order and shipment details
          return NextResponse.json({
              success: true,
              order: order._id,
              shipment: shipment._id
          }, { status: 201 });
  
      } catch (error) {
          console.error('Error creating order and shipment:', error);
          return NextResponse.json({ 
              success: false,
              error: 'Failed to process order'
          }, { status: 500 });
      }
  }