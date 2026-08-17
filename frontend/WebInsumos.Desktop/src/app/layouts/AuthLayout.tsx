import type { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
  aside: ReactNode
}

export function AuthLayout({
  children,
  aside,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-100 p-6 lg:p-10">
      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-80px)]
          max-w-[1600px]
          gap-8
          lg:grid-cols-2
        "
      >
        <section className="rounded-xl bg-white">
          {children}
        </section>

        <aside
          className="
            hidden
            overflow-hidden
            rounded-xl
            bg-zinc-800
            lg:block
          "
        >
          {aside}
        </aside>
      </div>
    </main>
  )
}