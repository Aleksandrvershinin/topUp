import { SyncedCurrencyInput } from './SyncedCurrencyInput'
import { useSyncedCurrency } from './useSyncedCurrency'

export const Amount = () => {
    const { setLastChanged } = useSyncedCurrency()

    return (
        <div className='mt-7 space-y-2'>
            <p className='text-[0.75rem]'>Укажите сумму</p>
            <div className='flex max-w-[288px]'>
                <SyncedCurrencyInput
                    name='secondaryAmount'
                    placeholder='0000.00'
                    setLastChanged={setLastChanged}
                />
                <SyncedCurrencyInput
                    name='amount'
                    placeholder='0000.00'
                    setLastChanged={setLastChanged}
                />
            </div>
        </div>
    )
}
