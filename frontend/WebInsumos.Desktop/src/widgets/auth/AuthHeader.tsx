interface AuthHeaderProps {
  title: string
  description: string
}

export function AuthHeader({
  title,
  description,
}: AuthHeaderProps) {
  return (
    <header className="mb-7 text-center">
      <img
        src="/logo.svg"
        alt="Web Insumos"
        className="mx-auto mb-4 h-16 w-auto"
      />

      <h1 className="text-xl font-semibold text-zinc-700">
        {title}
      </h1>

      <p className="mt-1 text-xs text-zinc-500">
        {description}
      </p>
    </header>
  )
}