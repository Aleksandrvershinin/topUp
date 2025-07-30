import { z } from 'zod'

const baseFields = {
    amount: z.number().positive('Сумма должна быть положительной'),
    secondaryAmount: z.any()
}
const savedCardSchema = z.object({
    ...baseFields,
    type: z.literal('saved'),
    cardId: z.string().min(5, 'Некорректный ID карты')
})

const newCardSchema = z
    .object({
        ...baseFields,
        type: z.literal('new'),
        cardNumber: z
            .string()
            .transform((val) => val.replace(/\s+/g, ''))
            .refine((val) => /^\d{16}$/.test(val), {
                message: 'Введите 16 цифр номера карты'
            }),

        month: z.string().regex(/^(0[1-9]|1[0-2])$/, 'Месяц от 01 до 12'),

        year: z
            .string()
            .regex(/^\d{2}$/, 'Год в формате ГГ')
            .refine(
                (yearStr) => {
                    const year = parseInt('20' + yearStr, 10)
                    const now = new Date()
                    return year >= now.getFullYear()
                },
                {
                    message: 'Срок действия карты истёк'
                }
            ),

        cvv: z.string().regex(/^\d{3}$/, 'Введите 3 цифры CVV'),

        saveCard: z.boolean().optional()
    })
    .refine(
        ({ month, year }) => {
            const monthNum = parseInt(month, 10)
            const yearNum = parseInt('20' + year, 10)

            if (isNaN(monthNum) || isNaN(yearNum)) return false

            const now = new Date()
            const currentMonth = now.getMonth() + 1
            const currentYear = now.getFullYear()

            return yearNum > currentYear || (yearNum === currentYear && monthNum >= currentMonth)
        },
        {
            message: 'Срок действия карты истёк',
            path: ['month']
        }
    )

export const topUpFormSchema = z.discriminatedUnion('type', [savedCardSchema, newCardSchema])

export type TopUpFormData = z.infer<typeof topUpFormSchema>
