import { TopUpFormMaskInput } from '../inputs/TopUpFormMaskInput'

export const CardCVC = () => {
    return (
        <div className='pt-[32px] px-5 md:pt-2'>
            <p className='mb-2 text-[#555770]'>CVV/CVC</p>
            <div className='flex gap-2 md:flex-col'>
                <TopUpFormMaskInput
                    inputMode='decimal'
                    className='w-[72px]'
                    id='cvv'
                    name='cvv'
                    mask='999'
                    placeholder='000'
                />
                <p className='text-[#555770] text-[0.625rem]'>три цифры с обратной стороны карты</p>
            </div>
        </div>
    )
}
