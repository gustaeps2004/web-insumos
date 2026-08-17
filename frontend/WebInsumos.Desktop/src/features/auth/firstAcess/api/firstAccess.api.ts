import { httpClient } from '@/shared/api/httpClient'

import type {
  FirstAccessData,
} from '../schema/firstAccess.schema'

export async function firstAccess(
  token: string,
  data: FirstAccessData,
) {
  const response = await httpClient.post(
    '/auth/first-access',
    {
      token,
      senha: data.senha,
    },
  )

  return response.data
}