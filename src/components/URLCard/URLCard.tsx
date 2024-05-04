import 'src/components/URLCard/URLCard.css'
import Copy from 'src/components/Icons/Copy'

interface URLCardProps {
  url?: string
}

const URLCard = ({url}: URLCardProps) => {

  const handleClick = () => {
    if (!url) return
    navigator.clipboard.writeText(url);
  }

  return (
    <article className="card">
      <p>{url ?? "The URL will be placed here"}</p>
      {url && <Copy onClick={handleClick} cursor={"pointer"}/>}
    </article>
  )
}

export default URLCard