import type { ReactNode } from 'react'

import { AuthHeader } from './AuthHeader'

interface AuthContentProps {
  title: string
  description: string
  children: ReactNode
}

export function AuthContent({
  title,
  description,
  children,
}: AuthContentProps) {
  return (
    <div className="w-full max-w-sm">
      <AuthHeader
        title={title}
        description={description}
      />

      {children}
    </div>
  )
}