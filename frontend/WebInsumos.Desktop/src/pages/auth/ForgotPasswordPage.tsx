import { AuthLayout } from '@/app/layouts/AuthLayout'

import { ForgotPasswordForm } from '@/features/auth/forgotPassword/ui/ForgotPasswordForm'

import { AuthContent } from '@/widgets/auth/AuthContent'
import { AuthPanel } from '@/widgets/auth/AuthPanel'
import { AuthVisualPanel } from '@/widgets/auth/AuthVisualPanel'

export function ForgotPasswordPage() {
  return (
    <AuthLayout aside={<AuthVisualPanel />}>
      <AuthPanel>
        <AuthContent
          title="Esqueceu a Senha?"
          description="Informe o seu e-mail"
        >
          <ForgotPasswordForm />
        </AuthContent>
      </AuthPanel>
    </AuthLayout>
  )
}