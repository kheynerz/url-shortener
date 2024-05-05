import { useEffect, useState } from "react"
import { getUrls } from "src/services/getUrls"
import { Url } from "src/types/shortUrl"

const useUrls = () => {
    const [urls, setUrls] = useState<Url[]>([])


    const fetchUrls = async () => {
        const response = await getUrls()
        const responseUrls = response.urls;
        setUrls(responseUrls)
    }

    useEffect(() => {
        fetchUrls()
    }, [])
    

    return urls
}

export default useUrls