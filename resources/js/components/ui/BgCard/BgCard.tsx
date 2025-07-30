export const BgCard = () => {
    return (
        <div
            className='w-full h-full bg-gradient-to-br from-blue-500 to-blue-900 rounded-none
        shadow-none relative'
        >
            <svg
                className='absolute top-0 left-0 w-full h-full opacity-10'
                viewBox='0 0 500 150'
                preserveAspectRatio='none'
            >
                <path d='M0,50 C150,150 350,0 500,100 L500,0 L0,0 Z' fill='#ffffff' />
            </svg>
        </div>
    )
}
