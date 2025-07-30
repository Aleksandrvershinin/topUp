import { FieldPath, useFormContext } from 'react-hook-form'
import { TopUpFormInput } from './TopUpFormInput'
import { TopUpFormData } from '../TopUpForm/topUpFormSchema'
import { Input } from '@/components/ui/input'
import { InputHTMLAttributes } from 'react'
import { useHookFormMask } from 'use-mask-input'

type Props = {
    name: FieldPath<TopUpFormData>
    mask: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>

export const TopUpFormMaskInput = ({ mask, name, ...rest }: Props) => {
    const { register } = useFormContext()
    const registerWithMask = useHookFormMask(register)
    const { ref, name: _name } = registerWithMask(name, mask, {
        showMaskOnHover: false,
        positionCaretOnTab: true,
        autoUnmask: true
    })
    return (
        <TopUpFormInput
            name={name}
            {...rest}
            renderInput={(field, fieldState) => (
                <Input
                    {...field}
                    {...rest}
                    ref={ref}
                    value={
                        typeof field.value === 'string' || typeof field.value === 'number'
                            ? field.value
                            : ''
                    }
                    variant={fieldState.invalid ? 'error' : 'default'}
                />
            )}
        />
    )
}
