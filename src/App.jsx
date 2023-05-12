import React from 'react'
import DesktopMainPage from './components/DesktopMainPage'
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <DesktopMainPage/>
      <Footer/>
    </div>
  )
}
