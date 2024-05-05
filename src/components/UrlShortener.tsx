import { useState } from "react";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input"
import { ShortenedUrl } from "src/components/ShortenedUrl";
import { SAVED_URLS_KEY } from "src/config/constants";
import useField from "src/hooks/useField";
import useLocalStorage from "src/hooks/useLocalStorage";
import { createShortUrl } from "src/services/createShortUrl";
import { ErrorResponse, ShortUrl, Url } from "src/types/shortUrl";


const isErrorResponse = (response: ShortUrl | ErrorResponse): response is ErrorResponse => 'errors' in response || response.full_url[0] === "can't be blank";

const API_URL = import.meta.env.VITE_API_URL

const UrlShortener = () => {
    const fullUrl = useField({name: 'full-url'})
    const localStorageUrls = useLocalStorage(SAVED_URLS_KEY)

    const [shortUrl, setShortUrl] = useState<string>("")
    const [error, setError] = useState("")

    const saveUrl = (url : ShortUrl) => {
        const urls = JSON.parse(localStorageUrls ?? "[]") as Url[]
        localStorage.setItem(SAVED_URLS_KEY, JSON.stringify([url, ...urls]))
        window.dispatchEvent(new Event('storage'))
    }

    const handleClick = async () => {
        setError("")
        const response = await createShortUrl(fullUrl.value)
        if (isErrorResponse(response)){
            const err = response['errors'] ? response['errors'][0] : "Full url can't be blank"
            setError(err)
            return
        }   

        setShortUrl(`${API_URL}${response.short_code}`)
        saveUrl(response)
    }

    return (
        <section>
            <Input
                label="Your full URL"
                placeholder="https://example.com/very-long-url"
                error={error}
                {...fullUrl}
            />
            <Button onClick={handleClick}>Shorten URL</Button>
            <ShortenedUrl shortUrl={shortUrl}/>
        </section>
      
    );
}

export default UrlShortener