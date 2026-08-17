import { z } from 'zod'

export const firstAccessSchema = z
  .object({
    senha: z
      .string()
      .min(1, 'Senha é obrigatória')
      .min(
        8,
        'A senha deve possuir pelo menos 8 caracteres',
      ),

    confirmarSenha: z
      .string()
      .min(1, 'Confirme a senha'),
  })
  .refine(
    (data) => data.senha === data.confirmarSenha,
    {
      message: 'As senhas não coincidem',
      path: ['confirmarSenha'],
    },
  )

export type FirstAccessData = z.infer<
  typeof firstAccessSchema
>