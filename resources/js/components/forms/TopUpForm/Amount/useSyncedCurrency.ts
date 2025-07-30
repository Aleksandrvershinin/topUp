import { useEffect, useRef } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

const CONVERSION_RATE = 15

export const useSyncedCurrency = () => {
    const { control, setValue } = useFormContext()

    const amount = useWatch({ name: 'amount', control })
    const secondaryAmount = useWatch({ name: 'secondaryAmount', control })

    const lastChanged = useRef<'amount' | 'secondary' | undefined>(undefined)

    const setLastChanged = (name: 'amount' | 'secondary') => {
        lastChanged.current = name
    }

    const resetBoth = () => {
        setValue('amount', '')
        setValue('secondaryAmount', '')
    }

    useEffect(() => {
        if (lastChanged.current === 'amount') {
            const num = parseFloat(String(amount))
            const converted = Number((num / CONVERSION_RATE).toFixed(2))
            if (isFinite(converted)) {
                setValue('secondaryAmount', converted)
            } else {
                resetBoth()
            }
        }
    }, [amount, setValue])

    useEffect(() => {
        if (lastChanged.current === 'secondary') {
            const num = parseFloat(String(secondaryAmount))
            const converted = Number((num * CONVERSION_RATE).toFixed(2))
            if (isFinite(converted)) {
                setValue('amount', converted)
            } else {
                resetBoth()
            }
        }
    }, [secondaryAmount, setValue])

    return { setLastChanged }
}
