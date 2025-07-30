export const NewCard = () => {
    return (
        <div
            className='bg-[#F2F2F5] rounded-lg w-[116px] h-[80px] text-[#555770] pt-4
        text-sm flex flex-col items-center'
        >
            <div>
                <svg
                    width='28'
                    height='29'
                    viewBox='0 0 28 29'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M14 5.97201V22.3053'
                        stroke='#7B8794'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M5.83337 14.1387H22.1667'
                        stroke='#7B8794'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </div>
            <div>Новая карта</div>
        </div>
    )
}
