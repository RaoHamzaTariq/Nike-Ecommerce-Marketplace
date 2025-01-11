import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name:"name",
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
    defineField({
        name: 'shortDesc',
        type: 'string',
      }),
    defineField({
        name: 'colors',
        title: 'Colors',
        type: 'number',
      }),
      defineField({
        name: 'stock',
        title: 'Stocks',
        type: 'number',
      }),
      defineField({
        name: 'rating',
        title: 'Rating',
        type: 'number',
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'number',
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
        source: 'name',
      },
    }),
    // defineField({
    //   name: 'author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    // defineField({
    //   name: 'categories',
    //   type: 'array',
    //   of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    // }),
    // defineField({
    //   name: 'publishedAt',
    //   type: 'datetime',
    // }),
    // defineField({
    //   name: 'body',
    //   type: 'blockContent',
    // }),
  ],
//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//     },
//     prepare(selection) {
//       const {author} = selection
//       return {...selection, subtitle: author && `by ${author}`}
//     },
//   },
})