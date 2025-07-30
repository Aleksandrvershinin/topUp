import { Input } from '@/components/ui/input'
import { TopUpFormInput } from '../../inputs/TopUpFormInput'
import { clsx } from 'clsx'

type Props = {
    name: 'amount' | 'secondaryAmount'
    label?: string
    placeholder?: string
    setLastChanged: (name: 'amount' | 'secondary') => void
}

export const SyncedCurrencyInput = ({ name, placeholder, setLastChanged }: Props) => {
    return (
        <TopUpFormInput
            name={name}
            renderInput={(field, fieldState) => (
                <div className='relative'>
                    <Input
                        {...field}
                        placeholder={placeholder ?? '0000.00'}
                        value={
                            typeof field.value === 'string' || typeof field.value === 'number'
                                ? field.value
                                : ''
                        }
                        inputMode='decimal'
                        variant={fieldState.invalid ? 'error' : 'default'}
                        className={clsx('bg-[#FAFAFC] h-[52px]', {
                            'border-[#E4E4EB]': !fieldState.invalid,
                            'rounded-r-none': name === 'secondaryAmount',
                            'rounded-l-none': name === 'amount'
                        })}
                        onChange={(e) => {
                            let value = e.target.value.replace(/[^0-9.]/g, '')
                            const parts = value.split('.')
                            if (parts.length > 2) {
                                value = parts[0] + '.' + parts.slice(1).join('')
                            }
                            setLastChanged(name === 'amount' ? 'amount' : 'secondary')
                            const numberValue = value === '' ? undefined : Number(value)
                            field.onChange(numberValue)
                        }}
                    />
                    <div className='absolute right-3 top-1/2 -translate-y-1/2 text-[#8F90A6]'>
                        {name === 'amount' ? '₽' : 'ֆ'}
                    </div>
                </div>
            )}
        />
    )
}
