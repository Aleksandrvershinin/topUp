import * as React from 'react'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const inputVariants = cva('h-9 border w-full rounded-md bg-white pl-4 outline-none', {
    variants: {
        variant: {
            default: '',
            error: 'border-red-500'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
        VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = 'text', variant, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(inputVariants({ variant }), className)}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = 'Input'

export { Input }
