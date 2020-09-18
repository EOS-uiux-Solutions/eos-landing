import React from 'react'
import { Link } from '@reach/router'
import Logo from '../assets/images/EOS_LOGO.png'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active' : ''
      }
    }}
  />
)

const Navigation = () => {
  return (
    <header className='flex-wrap-sm'>
      <div className='brand'>
        <Link to='/'>
          <img className='logo' src={Logo} alt='' />
          <span className='brand-text'>Brand book</span>
        </Link>
      </div>
      <nav>
        <NavLink to='/'>Home</NavLink>
      </nav>
    </header>
  )
}

export default Navigation
