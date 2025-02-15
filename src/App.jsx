import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Clients from './components/Clients'
import Community from './components/Community'
import Unlock from './components/Unlock'
import Achievements from './components/Achievements'
import Calender from './components/Calender'
import Customer from './components/Customer'
import Update from './components/Update'
import Frame from './components/Frame'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar/>
    <Header/>
    <Clients/>
    <Community/>
    <Unlock/>
    <Achievements/>
    <Calender/>
    <Customer/>
    <Update/>
    <Frame/>
    <Footer/>
  </div>
  )
}

export default App
