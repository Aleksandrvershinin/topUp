import type { CardType } from './card.schema'

type Props = {
    card: CardType
}
function getLast4Chars(str: string) {
    return str.length <= 4 ? str : str.slice(-4)
}
export const Card = ({ card }: Props) => {
    return (
        <div
            className='bg-[#6698FA] rounded-lg w-[116px] h-[80px] text-white pl-2 pt-8
        text-[0.75rem]'
        >
            <div>•••• {getLast4Chars(card.number)}</div>
            <div className='flex gap-x-1'>
                <div>{card.month}</div>
                <div>/</div>
                <div>{card.year}</div>
            </div>
        </div>
    )
}
