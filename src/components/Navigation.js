import React from 'react'
import { Link } from '@reach/router'
import Logo from '../assets/images/brand_assets/brand-book-logo.png'

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
        </Link>
      </div>
      <nav>
        <NavLink to='/'>Vision</NavLink>
        <NavLink to='/BrandBook'>Brand assets</NavLink>
        <NavLink to='/ContributingGuide'>How to contribute</NavLink>
      </nav>
    </header>
  )
}

export default Navigation
