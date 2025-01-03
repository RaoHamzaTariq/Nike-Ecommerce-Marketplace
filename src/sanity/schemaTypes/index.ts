import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import userType from './userType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,userType],
}
