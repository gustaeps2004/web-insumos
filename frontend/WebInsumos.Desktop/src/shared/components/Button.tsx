import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export function Button({
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        flex
        h-10
        w-full
        items-center
        justify-center
        rounded
        bg-green-600
        px-4
        text-sm
        font-medium
        text-white
        transition
        hover:bg-green-700
        focus:outline-none
        focus:ring-2
        focus:ring-green-500
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}