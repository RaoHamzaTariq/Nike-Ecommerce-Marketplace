import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "productName",
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'productName',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image', // Using Sanity's image type for image field
      options: {
        hotspot: true,
      },
    }),
    
    // New field for reviews
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object', // Define each review as an object
          fields: [
            defineField({
              name: 'rating', // Rating for the review
              title: 'Rating',
              type: 'number', // Assuming rating is numeric (1-5)
              validation: Rule => Rule.min(1).max(5), // Add validation for rating
            }),
            defineField({
              name: 'customerName', // Customer's name who wrote the review
              title: 'Customer Name',
              type: 'string', // String field for the customer's name
            }),
            defineField({
              name: 'comment', // Review comment
              title: 'Comment',
              type: 'text', // Text field for the review comment
            }),
          ],
        },
      ],
    }),
  ],
});
