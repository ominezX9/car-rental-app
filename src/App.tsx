import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navbar'
import Home from './pages/Home';
import './App.css'
import Footer from './components/footer';

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
