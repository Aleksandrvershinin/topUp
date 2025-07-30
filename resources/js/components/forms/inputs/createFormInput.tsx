import { Input } from '@/components/ui/input'
import {
    useFormContext,
    FieldPath,
    FieldValues,
    ControllerRenderProps,
    ControllerFieldState
} from 'react-hook-form'
import { cn } from '@/lib/utils'
import { FormField } from '@/components/ui/form'

type FormInputProps<T extends FieldValues> = React.InputHTMLAttributes<HTMLInputElement> & {
    name: FieldPath<T>
    renderInput?: (
        field: ControllerRenderProps<T>,
        fieldState: ControllerFieldState
    ) => React.ReactNode
}

export function createFormInput<T extends FieldValues>() {
    return (props: FormInputProps<T>) => <FormInputInner<T> {...props} />
}

function FormInputInner<T extends FieldValues>({
    name,
    renderInput,
    type = 'text',
    ...rest
}: FormInputProps<T>) {
    const { control } = useFormContext<T>()
    const { id, ...otherRest } = rest

    return (
        <FormField
            control={control}
            name={name}
            render={({ field, fieldState }) =>
                renderInput ? (
                    renderInput(field, fieldState)
                ) : (
                    <Input
                        {...field}
                        {...otherRest}
                        id={id}
                        type={type}
                        className={cn(fieldState.invalid && 'border-red-500')}
                    />
                )
            }
        />
    )
}
