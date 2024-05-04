import './App.css'
import Header from 'src/components/Header'
import UrlShortener from 'src/components/UrlShortener'
import UrlOverview from 'src/components/UrlOverview'

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
