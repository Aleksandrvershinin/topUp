import { Home } from '@/pages/home/Home.page'
import { Toaster } from 'sonner'

export const App = () => {
    return (
        <>
            <Toaster position='top-right' richColors />
            <Home />
        </>
    )
}
