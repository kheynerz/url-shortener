import { ErrorResponse, ShortUrl } from "src/types/shortUrl"

const API_URL = import.meta.env.VITE_API_URL

export const createShortUrl = (full_url: string): Promise<ShortUrl | ErrorResponse> => {
  return fetch(`${API_URL}/short_urls.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `full_url=${full_url}`
    })
    .then(response => response.json())
}