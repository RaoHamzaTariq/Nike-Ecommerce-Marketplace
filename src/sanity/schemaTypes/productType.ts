import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name:"productName",
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
   
  ],

})