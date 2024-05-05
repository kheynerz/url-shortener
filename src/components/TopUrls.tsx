import useUrls from "src/hooks/useUrls"
import { URLCard } from "./URLCard";
import { getDomainFromUrl } from "src/utils/getDomainFromUrl";

const API_URL = import.meta.env.VITE_API_URL

const TopUrls = () => {
  const urls = useUrls()  

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

export default TopUrls