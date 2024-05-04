import { Button } from "src/components/Button";
import { Input } from "src/components/Input"
import { ShortenedUrl } from "src/components/ShortenedUrl";

const UrlShortener = () => {
    return (
        <>
            <Input
                label="Your long URL"
                placeholder="https://example.com/very-long-url"
            />
            <Button>Shorten URL</Button>
            <ShortenedUrl/>
        </>
      
    );
}

export default UrlShortener