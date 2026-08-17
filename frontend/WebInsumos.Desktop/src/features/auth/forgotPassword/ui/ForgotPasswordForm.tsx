import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'

import {
  forgotPasswordSchema,
  type ForgotPasswordData,
} from '../schema/forgotPassword.schema'

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(
    data: ForgotPasswordData,
  ) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input
        id="email"
        type="email"
        label="E-mail"
        placeholder="meuemail@gmail.com"
        autoComplete="email"
        error={errors.email?.message}
        {...register('email')}
      />

      <p className="text-center text-[11px] text-zinc-400">
        Será enviado um e-mail com instruções para a alteração da senha
      </p>

      <Button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? 'Enviando...'
          : 'Enviar'}
      </Button>
    </form>
  )
}