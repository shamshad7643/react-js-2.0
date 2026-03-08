import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import { Link } from 'react-router-dom'
const App = () => {
  return (

   

    <div>

      <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
        <h2>Navebar</h2>

        
         <div className='flex gap-4'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App