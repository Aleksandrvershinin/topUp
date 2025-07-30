import { TopUpFormInput } from '../inputs/TopUpFormInput'
import { Checkbox } from '@/components/ui/checkbox'

export const SaveCard = () => {
    return (
        <TopUpFormInput
            name={'saveCard'}
            renderInput={(field) => (
                <div className='flex gap-x-2'>
                    <div>
                        <Checkbox id='saveCard' checked={!!field.value} onChange={field.onChange} />
                    </div>
                    <label htmlFor='saveCard' className='text-[0.75rem]'>
                        Запомнить эту карту. Это безопасно. Сохраняя карту, вы соглашаетесь с
                        условиями привязки карты.
                    </label>
                </div>
            )}
        />
    )
}
