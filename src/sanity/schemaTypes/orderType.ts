// ./schemas/order.js

import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
       defineField({
      name: 'price',
      title: 'Price',
      type: 'number'
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number'
    }),
    defineField({
      name: 'product_id',
      title: 'Product ID',
      type: 'reference',
      to: [{ type: 'product' }] // Reference to product schema
    }),
    defineField({
      name: 'customer_id',
      title: 'Customer ID',
      type: 'reference',
      to: [{ type: 'user' }] // Reference to user schema
    }),
    defineField({
      name: 'order_date',
      title: 'Order Date',
      type: 'datetime'
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'boolean',
    })
  ],
  preview: {
    select: {
      title: 'order_id', // Display order ID in preview
      subtitle: 'price' // Optionally show price as subtitle
    }
  }
});
