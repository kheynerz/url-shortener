import { useEffect, useState } from 'react'

const useHash = () => {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleLocationChange = () => {
        setHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleLocationChange)

    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  return hash
}

export default useHash