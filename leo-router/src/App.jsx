import { useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event (NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejmplo</p>
      <a href='/about'>Ir a Sobre Nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/125588762?v=4' alt='Foto'/>
          <p>Hola! Me llamo Leonel y estoy creando un clon de React Router.</p>
      </div>   
          <a href='/'>Ir a la Home</a>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath ] = useState (window.location.pathname)
  
  return (
    <main>
      {currentPath === '/' && <HomePage/>}
      {currentPath === '/about' && <AboutPage/>}
    </main>
  )
}
export default App
