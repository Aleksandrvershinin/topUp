import { cn } from '@/lib/utils'
import * as React from 'react'

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    // без label вообще
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className='relative h-5 w-5'>
                <input
                    ref={ref}
                    type='checkbox'
                    className={cn(
                        'peer appearance-none h-full w-full rounded-sm border-2 border-[#3E7BFA] bg-white',
                        className
                    )}
                    {...props}
                />
                <span
                    className={cn(
                        'pointer-events-none absolute inset-0 flex items-center justify-center text-[#3E7BFA]',
                        'peer-checked:visible peer-checked:opacity-100 opacity-0 transition-opacity'
                    )}
                >
                    ✓
                </span>
            </div>
        )
    }
)

Checkbox.displayName = 'Checkbox'
