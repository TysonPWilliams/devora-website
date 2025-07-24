import './App.css'
import { Routes, Route } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Header from './assets/components/Header.jsx'
import Hero from './assets/components/Hero.jsx'
import Examples from './assets/components/Examples.jsx'


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
            </>
          }
        />
      </Routes>
      {/* <DotLottieReact
        src='path/to/animation.lottie'
        loop
        autoplay
      /> */}
    </>
  )
}

export default App
