import { useEffect, useState } from "react"

const useLocalStorage = (key: string) => {
    const [data, setData] = useState<string | null>(localStorage.getItem(key))

    useEffect(() => {
        const handleStorageChange = () => {
            const item = localStorage.getItem(key)
            setData(item)
        }
        window.addEventListener('storage', handleStorageChange)
    
        return () => {
          window.removeEventListener('storage', handleStorageChange)
        }
    }, [key])

    return data
}

export default useLocalStorage