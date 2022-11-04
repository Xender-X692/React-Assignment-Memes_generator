import React from 'react'
import './style.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='img-container'>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt="" />
        <h2  className='header-title'>Header component</h2>
        </div>
        <h4>React Course - Project 3</h4>
    </header>
  )
}

export default Header