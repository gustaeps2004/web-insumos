import type { ReactNode } from 'react'

import { AuthFooter } from './AuthFooter'

interface AuthPanelProps {
  children: ReactNode
}

export function AuthPanel({
  children,
}: AuthPanelProps) {
  return (
    <div className="flex min-h-full flex-col px-8 py-6 lg:px-14">
      <div className="flex flex-1 items-center justify-center">
        {children}
      </div>

      <AuthFooter />
    </div>
  )
}