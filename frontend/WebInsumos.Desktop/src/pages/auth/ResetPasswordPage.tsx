import { AuthLayout } from '@/app/layouts/AuthLayout'

import { ResetPasswordForm } from '@/features/auth/resetPassword/ui/ResetPasswordForm'

import { AuthContent } from '@/widgets/auth/AuthContent'
import { AuthPanel } from '@/widgets/auth/AuthPanel'
import { AuthVisualPanel } from '@/widgets/auth/AuthVisualPanel'

export function ResetPasswordPage() {
  return (
    <AuthLayout aside={<AuthVisualPanel />}>
      <AuthPanel>
        <AuthContent
          title="Renove a Senha"
          description="Informe uma senha segura"
        >
          <ResetPasswordForm />
        </AuthContent>
      </AuthPanel>
    </AuthLayout>
  )
}