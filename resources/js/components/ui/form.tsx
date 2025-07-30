import * as React from 'react'
import {
    useFormContext,
    Controller,
    FormProvider,
    type ControllerProps,
    FieldValues
} from 'react-hook-form'
import { cn } from '@/lib/utils'

const Form = FormProvider

function FormField<TFieldValues extends FieldValues = FieldValues>(
    props: ControllerProps<TFieldValues>
) {
    return <Controller {...props} />
}

function FormErrorMessage({ children, className }: React.HTMLAttributes<HTMLParagraphElement>) {
    const { formState } = useFormContext()
    return formState.errors ? (
        <p className={cn('text-sm text-red-500', className)}>{children}</p>
    ) : null
}

export { Form, FormField, FormErrorMessage }
