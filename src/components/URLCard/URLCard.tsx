import 'src/components/URLCard/URLCard.css'
import Copy from 'src/components/Icons/Copy'
import { useState } from 'react'

interface URLCardProps {
  title?: string
  url: string
}

const URLCard = ({ title, url }: URLCardProps) => {
  const [showMessage, setShowMessage] = useState(false)
  
  const handleClick = () => {
    if (!url) return
    navigator.clipboard.writeText(url);
    setShowMessage(true)
    setTimeout(() => {setShowMessage(false)}, 2000)
  }

  return (
    <article className="card">
      <p>{title ?? (url === "" ? null : url) ?? "The URL will be placed here"}</p>
      {url && <Copy onClick={handleClick}/>}
      {showMessage && <div className='copy-message'>Copied!</div>}
    </article>
  )
}

export default URLCard