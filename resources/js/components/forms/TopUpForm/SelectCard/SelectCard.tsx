import { useFormContext, Controller } from 'react-hook-form'
import { Card } from '@/components/card/Card'
import { NewCard } from '@/components/card/NewCard'
import { clsx } from 'clsx'
import { TopUpFormData } from '../topUpFormSchema'
import { useCardStore } from '@/store/cardStore/useCardStore'

export const SelectCard = () => {
    const { cards, isLoading } = useCardStore()
    const { setValue, watch } = useFormContext<TopUpFormData>()
    const selectedCardId = watch('cardId')
    const type = watch('type')

    const handleSelectCard = (cardId: string) => {
        setValue('cardId', cardId)
        setValue('type', 'saved')
    }

    const handleSelectNewCard = () => {
        setValue('type', 'new')
    }

    return (
        <div>
            {isLoading ? (
                <p>Загрузка карт</p>
            ) : (
                <ul className='flex gap-x-1 overflow-auto pb-2'>
                    {cards.map((card) => (
                        <li
                            className={clsx('border-2 border-transparent rounded-lg p-[1px]', {
                                '!border-[#3E7BFA]': type === 'saved' && selectedCardId === card.id
                            })}
                            key={card.id}
                            onClick={() => handleSelectCard(card.id)}
                        >
                            <Card card={card} />
                        </li>
                    ))}
                    <li
                        className={clsx('border-2 border-transparent rounded-lg p-[1px]', {
                            '!border-[#3E7BFA]': type === 'new'
                        })}
                        onClick={handleSelectNewCard}
                    >
                        <NewCard />
                    </li>
                </ul>
            )}
        </div>
    )
}
