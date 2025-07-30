import { TopUpFormMaskInput } from '../inputs/TopUpFormMaskInput'

export const CardExpired = () => {
    return (
        <div>
            <p className='mb-2 text-white'>Действует до</p>
            <div className='flex gap-x-2 items-center'>
                <TopUpFormMaskInput
                    inputMode='decimal'
                    className='w-[72px]'
                    id='month'
                    name='month'
                    mask='99'
                    placeholder='ММ'
                />
                <div className='text-white'>/</div>
                <TopUpFormMaskInput
                    inputMode='decimal'
                    className='w-[72px]'
                    id='year'
                    name='year'
                    mask='99'
                    placeholder='ГГ'
                />
            </div>
        </div>
    )
}
