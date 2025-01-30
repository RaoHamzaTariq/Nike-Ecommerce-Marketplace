import { defineField, defineType } from "sanity";

// schemas/shipment.js
export default defineType({
  name: 'shipment',
  title: 'Shipment',
  type: 'document',
  fields: [
    defineField({
      name: 'order_id',
      title: 'Order ID',
      type: 'string',
      description: 'The ID of the order associated with this shipment.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'delivery_id',
      title: 'Delivery ID',
      type: 'string',
      description: 'The ID of the delivery associated with this shipment.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shippingStatus',
      title: 'Shipping Status',
      type: 'string',
      description: 'The current status of the shipment (e.g., Pending, Shipped, Delivered).',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shippingDate',
      title: 'Shipping Date',
      type: 'datetime',
      description: 'The date and time when the shipment was processed.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});