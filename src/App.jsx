import { useState } from 'react'
import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'
import "./App.scss"
import Hero from './components/Hero/Hero'

function App() {

  return (
    <main className='app'>
      <Navbar />
      <Hero />
      {/* <Form /> */}
    </main>
  )
}

export default App
