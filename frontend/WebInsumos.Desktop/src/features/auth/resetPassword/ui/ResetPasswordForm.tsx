import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'

import {
  resetPasswordSchema,
  type ResetPasswordData,
} from '../schema/resetPassword.schema'

export function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      senha: '',
      confirmarSenha: '',
    },
  })

  async function onSubmit(
    data: ResetPasswordData,
  ) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input
        id="senha"
        type="password"
        label="Nova senha"
        placeholder="Digite sua nova senha"
        autoComplete="new-password"
        error={errors.senha?.message}
        {...register('senha')}
      />

      <Input
        id="confirmarSenha"
        type="password"
        label="Confirme a senha"
        placeholder="Digite novamente sua senha"
        autoComplete="new-password"
        error={errors.confirmarSenha?.message}
        {...register('confirmarSenha')}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? 'Salvando...'
          : 'Salvar'}
      </Button>
    </form>
  )
}