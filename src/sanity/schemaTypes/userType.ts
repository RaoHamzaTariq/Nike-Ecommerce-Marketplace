// user.ts

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField( {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
   defineField({
    name: 'password',
    title: 'Password',
    type: 'string',
    validation: Rule => Rule.required(),
  }) ,
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'India', value: 'India' },
          { title: 'United States', value: 'United States' },
          { title: 'United Kingdom', value: 'United Kingdom' },
          { title: 'Canada', value: 'Canada' },
        ],
      },
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'Male' },
          { title: 'Female', value: 'Female' },
        ],
      },
    }),
  ],
});