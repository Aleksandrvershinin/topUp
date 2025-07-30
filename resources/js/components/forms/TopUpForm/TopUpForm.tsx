import { FormProvider } from 'react-hook-form'
import { useTopUpForm } from './useTopUpForm'
import { Button } from '@/components/ui/button'
import { BgCard } from '@/components/ui/BgCard/BgCard'
import { CardNumber } from './CardNumber'
import { CardExpired } from './CardExpired'
import { CardCVC } from './CardCVC'
import { SaveCard } from './SaveCard'
import { Amount } from './Amount/Amount'
import { SelectCard } from './SelectCard/SelectCard'

export const TopUpForm = () => {
    const { methods, onSubmit } = useTopUpForm()

    const { handleSubmit, formState, watch } = methods
    const typeCard = watch('type')

    return (
        <div>
            <p className='font-medium text-[1.375rem] leading-[1.75rem]'>
                Пополнить банковской картой
            </p>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <Amount />
                    <SelectCard />
                    {typeCard === 'new' && (
                        <>
                            <div className='relative md:flex md:items-center'>
                                <div className='relative h-[208px] md:w-[324px] rounded-xl overflow-hidden'>
                                    <div className='absolute inset-0 z-[1]'>
                                        <BgCard></BgCard>
                                    </div>
                                    <div className='px-5 space-y-4 pt-10 relative z-[2]'>
                                        <CardNumber />
                                        <CardExpired />
                                    </div>
                                </div>
                                <div className='h-[114px] bg-[#EBEBF0] w-full relative bottom-[12px] rounded-xl md:w-[147px] md:h-[200px] md:bottom-[unset] md:rounded-l-none md:right-1'>
                                    <div className='hidden md:block w-full h-[40px] bg-[#C7C9D9] mt-5'></div>
                                    <CardCVC />
                                </div>
                            </div>
                            <SaveCard />
                        </>
                    )}
                    <Button
                        type='submit'
                        disabled={formState.isSubmitting}
                        className='w-full md:w-[141px]'
                    >
                        {formState.isSubmitting ? 'Обработка...' : 'Оплатить'}
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}
