import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/shared/components/Button'
import { Checkbox } from '@/shared/components/Checkbox'
import { Input } from '@/shared/components/Input'

import {
  loginSchema,
  type LoginData,
} from '../schema/login.schema'

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      senha: '',
      lembrar: false,
    },
  })

  async function onSubmit(data: LoginData) {
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

      <Input
        id="senha"
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        autoComplete="current-password"
        error={errors.senha?.message}
        {...register('senha')}
      />

      <Checkbox
        label="Lembrar acesso"
        {...register('lembrar')}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? 'Entrando...'
          : 'Entrar'}
      </Button>
    </form>
  )
}