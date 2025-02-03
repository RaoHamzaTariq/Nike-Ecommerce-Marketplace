// ./schemas/order.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'customer_id',
      title: 'Customer Reference',
      type: 'reference',
      to: [{ type: 'user' }], // Assuming there's a customer schema
      description: 'Reference to the customer placing the order, identified by their email.'
    }),
    defineField({
      name: 'shipment_id',
      title: 'Shipmeny Reference',
      type: 'reference',
      to: [{ type: 'shipment' }],
    }),
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      description: 'Full name of the customer placing the order.'
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Email address of the customer.'
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Contact phone number of the customer.',
    }),
    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      description: 'The date and time when the order was placed.'
    }),
    
    defineField({
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
          { title: 'Failed', value: 'failed' },
        ],
      },
      description: 'Current status of the payment for this order.'
    }),
    defineField({
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      description: 'Current status of the order.'
    }),
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      type: 'array',
      of: [
        {
          type: 'object', // Using object type for structured product details
          fields: [
            defineField({
              name: 'product_id',
              title: 'Product ID',
              type: 'reference',
              to: [{ type: 'product' }], 
              description: "Unique identifier for the product."
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity Ordered',
              type: 'number',
              description: "Number of units ordered for this product."
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
      description: "Total amount for the order.",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
});
