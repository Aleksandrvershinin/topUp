import { TopUpFormMaskInput } from '../inputs/TopUpFormMaskInput'

export const CardNumber = () => {
    return (
        <div>
            <label className='mb-2 text-white block' htmlFor='cardNumber'>
                Номер карты
            </label>
            <TopUpFormMaskInput
                inputMode='decimal'
                name='cardNumber'
                mask='9999 9999 9999 9999'
                placeholder='Номер карты'
            />
        </div>
    )
}
