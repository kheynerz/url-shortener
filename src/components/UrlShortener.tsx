import { useState } from "react";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input"
import { ShortenedUrl } from "src/components/ShortenedUrl";
import useField from "src/hooks/useField";
import { createShortUrl } from "src/services/createShortUrl";
import { ErrorResponse, ShortUrl } from "src/types/shortUrl";

const isErrorResponse = (response: ShortUrl | ErrorResponse): response is ErrorResponse => 'errors' in response;

const API_URL = import.meta.env.VITE_API_URL

const UrlShortener = () => {
    const fullUrl = useField({name: 'full-url'})
    const [shortUrl, setShortUrl] = useState("")
    const [error, setError] = useState("")

    const handleClick = async () => {
        setError("")
        const response = await createShortUrl(fullUrl.value)
        if (isErrorResponse(response)){
            setError(response['errors'][0])
            return
        }   

        setShortUrl(`${API_URL}${response.short_code}`)
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