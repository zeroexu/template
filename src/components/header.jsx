import React from 'react'
import image from '../assets/images/logox100.jpg'
const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='header'>
        <img src={image} alt='' className='float-left' />
        <h2 className='float-left'>Viajar es la mejor guita invertida</h2>
        <div className='cleaner-floater' />
      </div>
    </div>
  )
}

export default Header
