import { useForm } from 'react-hook-form'
import { topUpFormSchema, type TopUpFormData } from './topUpFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { topUpFetch } from './topUpApi'
import { toast } from 'sonner'
import { useCardStore } from '@/store/cardStore/useCardStore'

export const useTopUpForm = () => {
    const { refetch } = useCardStore()
    const methods = useForm<TopUpFormData>({
        resolver: zodResolver(topUpFormSchema),
        defaultValues: {
            type: 'new',
            cardNumber: '',
            saveCard: true
        }
    })

    const onSubmit = async (data: TopUpFormData) => {
        try {
            const success = await topUpFetch(data)
            if (success) {
                toast.success('Успешно!')
                if (data.type === 'new') {
                    refetch()
                }
                methods.reset()
            } else {
                throw new Error('success is false')
            }
        } catch (error) {
            toast.error('Ошибка')
        }
    }
    return {
        methods,
        onSubmit
    }
}
