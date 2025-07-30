import { create } from 'zustand'
import axios from 'axios'
import { cardSchema, CardType } from '@/components/card/card.schema'
import z from 'zod'

const cardListSchema = z.array(cardSchema)

type CardStore = {
    cards: CardType[]
    isLoading: boolean
    error: string | null
    fetchCards: () => Promise<void>
    refetch: () => void
}

export const useCardStore = create<CardStore>((set) => {
    const fetchCards = async () => {
        set({ isLoading: true, error: null })
        try {
            const response = await axios.get('/api/cards')
            const parsed = cardListSchema.safeParse(response.data)
            if (!parsed.success) {
                console.error('Ошибка валидации карт:', parsed.error)
                set({ error: 'Некорректные данные от сервера', isLoading: false })
                return
            }
            set({ cards: parsed.data, isLoading: false })
        } catch (error: any) {
            set({ error: error.message || 'Ошибка загрузки', isLoading: false })
        }
    }

    fetchCards()

    return {
        cards: [],
        isLoading: true,
        error: null,
        fetchCards,
        refetch: fetchCards
    }
})
