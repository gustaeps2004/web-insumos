import { AuthLayout } from '@/app/layouts/AuthLayout'

import { LoginForm } from '@/features/auth/login/ui/LoginFrom'

import { AuthContent } from '@/widgets/auth/AuthContent'
import { AuthPanel } from '@/widgets/auth/AuthPanel'
import { AuthVisualPanel } from '@/widgets/auth/AuthVisualPanel'

export function LoginPage() {
  return (
    <AuthLayout aside={<AuthVisualPanel />}>
      <AuthPanel>
        <AuthContent
          title="Bem Vindo!"
          description="Informe o e-mail e a senha para continuar"
        >
          <LoginForm />
        </AuthContent>
      </AuthPanel>
    </AuthLayout>
  )
}