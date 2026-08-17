import { httpClient } from '@/shared/api/httpClient'

import type {
  ForgotPasswordData,
} from '../schema/forgotPassword.schema'

export async function forgotPassword(
  data: ForgotPasswordData,
) {
  const response = await httpClient.post(
    '/auth/forgot-password',
    data,
  )

  return response.data
}