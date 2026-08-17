import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'E-mail é obrigatório')
    .email('Informe um e-mail válido'),

  senha: z
    .string()
    .min(1, 'Senha é obrigatória'),

  lembrar: z.boolean(),
})

export type LoginData = z.infer<
  typeof loginSchema
>