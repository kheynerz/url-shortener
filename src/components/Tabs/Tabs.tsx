import { ReactNode } from 'react'
import 'src/components/Tabs/tabs.css'
import useHash from 'src/hooks/useHash'

interface TabProps {
  href: string
  text: string
  fallback?: boolean
}
export const Tab = ({href, text, fallback = false}: TabProps) => {
  const hash = useHash()

  const isActive = hash.includes(href) || fallback && hash === ""

  return <li className={`tab-item ${isActive ? 'active' : ''}`}>
    <a href={href}>{text}</a>
  </li >
}

interface TabsProps {
  children: ReactNode
}

export const Tabs = ({children} : TabsProps) => {
  return (
    <div className="tabs-container">
        <ul className='tabs-list'>
          {children}
        </ul>
    </div>  
    )
}

export default Tabs