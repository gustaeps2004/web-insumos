import { httpClient } from '@/shared/api/httpClient'

import type {
  ResetPasswordData,
} from '../schema/resetPassword.schema'

export async function resetPassword(
  token: string,
  data: ResetPasswordData,
) {
  const response = await httpClient.post(
    '/auth/reset-password',
    {
      token,
      senha: data.senha,
    },
  )

  return response.data
}