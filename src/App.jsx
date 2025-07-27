import './App.css'
import { Routes, Route } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Header from './assets/components/Header.jsx'
import Hero from './assets/components/Hero.jsx'
import Examples from './assets/components/Examples.jsx'
import AgencyIntro from './assets/components/AgencyIntro.jsx'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <Examples />
              <AgencyIntro />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
