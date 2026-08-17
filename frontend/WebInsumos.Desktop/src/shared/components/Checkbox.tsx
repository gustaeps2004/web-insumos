import type { ComponentProps } from 'react'

interface CheckboxProps
  extends ComponentProps<'input'> {
  label: string
}

export function Checkbox({label,...props
}: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-green-600"{...props}/>
      <span className="text-xs text-zinc-500">
        {label}
      </span>
    </label>
  )
}