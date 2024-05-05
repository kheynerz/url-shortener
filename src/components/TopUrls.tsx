import useUrls from "src/hooks/useUrls"
import { URLCard } from "./URLCard";
import { getDomainFromUrl } from "src/utils/getDomainFromUrl";
import { Pagination } from "./Pagination";
import usePagination from "src/hooks/usePagination";

const API_URL = import.meta.env.VITE_API_URL

const TopUrls = () => {
  const urls = useUrls()  

  const {pageUrls, ...rest} = usePagination(urls)

  return (
    <>
      {pageUrls.map(({ title, full_url, short_code }, index) => 
        <URLCard 
          title={title ?? getDomainFromUrl(full_url)} 
          url={`${API_URL}${short_code}`} key={index} />
        )}
      <Pagination {...rest}/>
    </>

  )
}

export default TopUrls