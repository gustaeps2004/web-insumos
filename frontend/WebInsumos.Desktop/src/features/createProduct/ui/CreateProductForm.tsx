import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  createProductSchema,
  type CreateProductData,
} from '../schema/createProduct.schema'

export function CreateProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductData>({
    resolver: zodResolver(createProductSchema),
  })

  function onSubmit(data: CreateProductData) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('codigo')} />

      {errors.codigo && (
        <span>{errors.codigo.message}</span>
      )}

      <input {...register('marca')} />

      <input {...register('linha')} />

      <input
        type="number"
        {...register('tamanho_cm', {
          valueAsNumber: true,
        })}
      />

      <input
        type="number"
        {...register('gramatura_gm', {
          valueAsNumber: true,
        })}
      />

      <input
        type="number"
        {...register('peso_medio', {
          valueAsNumber: true,
        })}
      />

      <button type="submit">
        Cadastrar produto
      </button>
    </form>
  )
}