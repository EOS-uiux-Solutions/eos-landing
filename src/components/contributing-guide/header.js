import React from 'react'
import '../../assets/scss/components/contributing-guide/header.scss'
import HeaderImage from '../../assets/images/header-image.svg'
const HeaderComponent = () => {
  return (
    <div className='header-wrapper'>
      <div className='header'>
        {/* Header content */}
        <div className='header-content'>
          <h1>CONTRIBUTE TO EOS</h1>
          <p>
            We want to make it as easy as possible for users to become EOS
            contributors, so we’ve created this contribution guide to help you
            get started. We have multiple tracks to cater to people of varying
            interests so that everyone can contribute.
          </p>
        </div>
        {/* Header image */}
        {/* <img src={HeaderImage} alt='Header' /> */}
        <div className='header-image-wrapper'>
          <img src={HeaderImage} alt='Header' />
          <img src={HeaderImage} alt='Header' />
        </div>
      </div>
    </div>
  )
}
export default HeaderComponent
