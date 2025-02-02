import { defineField, defineType } from "sanity";

export default defineType({
  name: 'shipment',
  title: 'Shipment',
  type: 'document',
  fields: [
    defineField({
      name: 'order_id',
      title: 'Order Reference',
      type: 'reference',
      to: [{ type: 'order' }], // Reference to the order schema
      description: 'Reference to the associated order for this shipment.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shippingStatus',
      title: 'Shipping Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      description: 'Current status of the shipment.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shippingDate',
      title: 'Shipping Date',
      type: 'datetime',
      description: 'The date when the shipment is scheduled to be shipped.',
    }),
    defineField({
      name: 'address',
      title: 'Shipping Address',
      type: 'object', // Using an object type for structured address
      fields: [
        defineField({
          name: 'fullAddress',
          title: 'Full Address',
          type: 'string',
          description: 'The complete shipping address.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          description: 'City for the shipping address.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'state',
          title: 'State/Province',
          type: 'string',
          description: 'State or province for the shipping address.',
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
          description: 'Country for the shipping address.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
          description: 'Postal code for the shipping address.',
        }),
      ],
    }),
  ],
});
