import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import userType from './userType'
import { orderType } from './orderType'
import shippmentType from './shippmentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,userType,orderType,shippmentType],
}
