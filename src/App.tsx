import './App.css'
import Header from 'src/components/Header'
import UrlShortener from './components/UrlShortener'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <UrlShortener/>
      </main>
    </>
  )
}

export default App
