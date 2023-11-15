import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar'
import Sidebar from './Sidebar'

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <div className='container'>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

export default App
