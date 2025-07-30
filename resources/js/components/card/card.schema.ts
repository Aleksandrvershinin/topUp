import z from 'zod'

export const cardSchema = z.object({
    id: z.string(),
    number: z.string(),
    month: z.string(),
    year: z.string()
})

export type CardType = z.infer<typeof cardSchema>
