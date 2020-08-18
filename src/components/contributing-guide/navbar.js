import React from 'react'
import Logo from '../../assets/images/EOS_LOGO.png'
import '../../assets/scss/components/contributing-guide/navbar.scss'
const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <img src={Logo} alt='EOS Logo' />
      <div>
        <span>Home</span>
        <span>Cheatsheet</span>
        <span>Docs</span>
      </div>
    </div>
  )
}

export default Navbar
