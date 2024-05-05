import 'src/components/URLCard/URLCard.css'
import Copy from 'src/components/Icons/Copy'

interface URLCardProps {
  title?: string
  url: string
}

const URLCard = ({ title, url }: URLCardProps) => {

  const handleClick = () => {
    if (!url) return
    navigator.clipboard.writeText(url);
  }

  return (
    <article className="card">
      <p>{title ?? url ?? "The URL will be placed here"}</p>
      {url && <Copy onClick={handleClick} cursor={"pointer"}/>}
    </article>
  )
}

export default URLCard