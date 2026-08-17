import { httpClient } from '@/shared/api/httpClient'

import type {
  LoginData,
} from '../schema/login.schema'

export async function login(
  data: LoginData,
) {
  const {
    lembrar: _lembrar,
    ...credentials
  } = data

  const response = await httpClient.post(
    '/auth/login',
    credentials,
  )

  return response.data
}