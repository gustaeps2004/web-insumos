import { z } from 'zod'

export const createProductSchema = z.object({
  codigo: z
    .string()
    .min(1, 'Código é obrigatório'),

  marca: z
    .string()
    .min(1, 'Marca é obrigatória'),

  linha: z
    .string()
    .min(1, 'Linha é obrigatória'),

  tamanho_cm: z
    .number()
    .positive('Tamanho deve ser maior que zero'),

  gramatura_gm: z
    .number()
    .positive('Gramatura deve ser maior que zero'),

  peso_medio: z
    .number()
    .positive('Peso médio deve ser maior que zero'),
})

export type CreateProductData = z.infer<
  typeof createProductSchema
>