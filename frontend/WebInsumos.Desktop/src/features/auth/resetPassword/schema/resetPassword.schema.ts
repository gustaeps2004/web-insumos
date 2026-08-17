import { z } from 'zod'

export const resetPasswordSchema = z
  .object({
    senha: z
      .string()
      .min(1, 'Nova senha é obrigatória')
      .min(
        8,
        'A senha deve possuir pelo menos 8 caracteres',
      ),

    confirmarSenha: z
      .string()
      .min(1, 'Confirme a nova senha'),
  })
  .refine(
    (data) => data.senha === data.confirmarSenha,
    {
      message: 'As senhas não coincidem',
      path: ['confirmarSenha'],
    },
  )

export type ResetPasswordData = z.infer<
  typeof resetPasswordSchema
>