import { httpClient } from '@/shared/api/httpClient'

import type {CreateProductData} from '../schema/createProduct.schema'

export async function createProduct(
  data: CreateProductData,
) {
  const response = await httpClient.post(
    '/products',
    data,
  )

  return response.data
}