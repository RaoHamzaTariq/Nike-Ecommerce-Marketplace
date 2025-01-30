// ./schemas/order.js
import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'customer_id',
      title: 'Customer Id',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'completionStatus',
      title: 'Completion Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      validation: Rule => Rule.required()
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
          { title: 'Refunded', value: 'refunded' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'product_id',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }],
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: Rule => Rule.required().min(1)
            })
          ],
          preview: {
            select: {
              title: 'product_id.name',
              subtitle: 'quantity'
            }
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'email',
      date: 'orderDate'
    },
    prepare(selection) {
      const { title, subtitle, date } = selection;
      return {
        title: title,
        subtitle: `${subtitle} - ${new Date(date).toLocaleDateString()}`,
      };
    }
  }
});
