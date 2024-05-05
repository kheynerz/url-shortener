import { SAVED_URLS_KEY } from "src/config/constants"
import useLocalStorage from "src/hooks/useLocalStorage"
import { Url } from "src/types/shortUrl"
import { URLCard } from "./URLCard"
import { getDomainFromUrl } from "src/utils/getDomainFromUrl"

const API_URL = import.meta.env.VITE_API_URL

const PreviousUrls = () => {
  const localStorageUrls = useLocalStorage(SAVED_URLS_KEY)
  
  const urls = JSON.parse(localStorageUrls ?? "[]") as Url[]

  if (!urls || urls.length === 0) return <p>You don't have previous URLs.</p>

  return (
    <>
      {urls.map(({ title, full_url, short_code }, index) => 
        <URLCard 
          title={title ?? getDomainFromUrl(full_url)} 
          url={`${API_URL}${short_code}`} key={index} />
        )}
    </>
    
  )
}

export default PreviousUrls