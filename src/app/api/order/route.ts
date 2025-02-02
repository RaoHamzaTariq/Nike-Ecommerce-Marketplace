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
          const orderData = await req.json();
          
  
          // 1. Create the order document
          const order = await client.create({
              _type: 'order',
              customer_id: {
                _type: 'reference',
                _ref: orderData.customer_id // Using email as customer reference
            },
              customerName: `${orderData.firstName} ${orderData.lastName}`,
              email: orderData.email,
              phoneNumber: orderData.phoneNumber,
              orderDate: new Date().toISOString(),
              paymentStatus: 'pending',
              orderStatus: 'pending',
              productDetails: orderData.productDetails.map((item: { product_id: string; quantity: number; }) => ({
                  product_id: {
                    _type: 'reference',
                    _ref: item.product_id // Using product id as reference
                  },
                  quantity: item.quantity
              })),
              total: orderData.total
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
                  fullAddress: orderData.fullAddress,
                  city: orderData.city,
                  state: orderData.state,
                  country: orderData.country,
                  postalCode: orderData.postalCode
              }
          });
          

          const user = await client.getDocument(orderData.customer_id);


          if (!user) {
            console.error('User data not found for ID');
            return NextResponse.json({ 
              error: 'User data not found' 
            }, { status: 404 });
          }
// Check if the wishList already exists
        const existingorderHistory = user.orderHistory || [];

        // Append the product ID to the wishlist as a reference
        const newexistingorderHistory = [...existingorderHistory, { _ref: order._id, _type: 'reference' }];

        // Update the user document with the new wishlist
        const data = await client.patch(user._id)
          .set({ wishList: newexistingorderHistory })
          .commit({ autoGenerateArrayKeys: true });

        if(!data){
          console.log("Order History not updated")
        }

          // Return success response with order and shipment details
          return NextResponse.json({
              success: true,
              order: order._id,
              shipment: shipment._id,
              user:user._id,
              message: 'Order created successfully',
          }, { status: 201 });
  
      } catch (error) {
          console.error('Error creating order and shipment:', error);
          return NextResponse.json({ 
              success: false,
              error: 'Failed to process order'
          }, { status: 500 });
      }
  }