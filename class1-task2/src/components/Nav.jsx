import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <img src="/images/brand_logo.png.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Locatin</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>

    </div>
  )
}

export default Nav