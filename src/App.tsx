import './App.css'
import UrlShortener from 'src/components/UrlShortener'
import UrlOverview from 'src/components/UrlOverview'
import { Header } from './components/Header'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <UrlShortener/>
        <UrlOverview/>
      </main>
    </>
  )
}

export default App
