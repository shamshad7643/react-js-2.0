
import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  console.log();
  return (
    <div>
      <Navbar title='Shaim' color='red' links = {['home', 'About', 'Contact', 'Place']}/>
      <Navbar title='Danish' color='green' links = {['Service', 'About', 'Contact','Place']}/>
      <Navbar title='Anubhaw' color='blue' links = {['Name', 'About', 'Contact', 'Place']}/>
    </div>
  )
}

export default App