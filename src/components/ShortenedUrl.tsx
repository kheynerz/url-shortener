import { URLCard } from "./URLCard"

interface ShortenedUrlProps {
  shortUrl: string
}

export const ShortenedUrl = ({shortUrl} : ShortenedUrlProps) => {
  return (
    <>
      <h2>Shortened URL</h2>
      <URLCard url={shortUrl}/>
    </>
  )
}

export default ShortenedUrl