import { AuthLayout } from '@/app/layouts/AuthLayout'

import { FirstAccessForm } from '@/features/auth/firstAcess/ui/FirstAccessForm'

import { AuthContent } from '@/widgets/auth/AuthContent'
import { AuthPanel } from '@/widgets/auth/AuthPanel'
import { AuthVisualPanel } from '@/widgets/auth/AuthVisualPanel'

export function FirstAccessPage() {
  return (
    <AuthLayout aside={<AuthVisualPanel />}>
      <AuthPanel>
        <AuthContent
          title="Primeiro Acesso"
          description="Informe uma senha segura"
        >
          <FirstAccessForm />
        </AuthContent>
      </AuthPanel>
    </AuthLayout>
  )
}