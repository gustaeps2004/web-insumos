import type { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  error?: string
}

export function Input({
  label,
  error,
  id,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-1 block text-xs font-medium text-zinc-700"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          h-10
          w-full
          rounded
          border
          border-zinc-300
          bg-white
          px-3
          text-sm
          text-zinc-800
          outline-none
          transition
          placeholder:text-zinc-400
          focus:border-green-500
          focus:ring-2
          focus:ring-green-500/20
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}