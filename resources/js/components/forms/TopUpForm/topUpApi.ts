import z from 'zod'
import { TopUpFormData } from './topUpFormSchema'
import axios from 'axios'

const topUpSchema = z.object({
    success: z.boolean()
})

export const topUpFetch = async (data: TopUpFormData) => {
    const response = await axios.post('/api/top-up', data)
    const parseResponse = topUpSchema.parse(response.data)
    return parseResponse.success
}
