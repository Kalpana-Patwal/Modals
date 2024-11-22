import React from 'react'
import BlueScreen from './components/BlueScreen'
import Microsoft from './components/Microsoft'
import Scanner from './components/Scanner'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <BlueScreen>
        <Microsoft/>
          <Scanner/>
      </BlueScreen>
      <Footer/>
    </div>
  )
}

export default App
