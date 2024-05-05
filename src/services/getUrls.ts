import { Url } from "src/types/shortUrl"

const API_URL = import.meta.env.VITE_API_URL

interface SuccessResponse {
    urls : Url[]
}

export const getUrls = (): Promise<SuccessResponse> => {
    return fetch(`${API_URL}`)
        .then(response => response.json())
}