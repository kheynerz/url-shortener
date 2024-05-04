import { Button } from "./Button";
import { Input } from "./Input"

const UrlShortener = () => {
    return (
        <>
            <Input
                label="Your long URL"
                placeholder="https://example.com/very-long-url"
            />
            <Button>Shorten URL</Button>
        </>
      
    );
}

export default UrlShortener