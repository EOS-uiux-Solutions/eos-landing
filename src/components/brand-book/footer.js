import React from 'react'

const FooterComponent = () => {
  return (
    <div className='section-container'>
      <div className='get-in-touch'>
        <h3>Get in touch with us</h3>
        <img
          src={require(`../../assets/images/brand_assets/twitter.svg`)}
          alt='LogoDesign'
        />
        <img
          src={require(`../../assets/images/brand_assets/linkedin.svg`)}
          alt='LogoDesign'
        />
      </div>
      <div className='get-in-touch'>
        <h3>EOS Products</h3>
        <ul className='product-list'>
          <li>Design system</li>
          <li>User story</li>
          <li>Icons</li>
        </ul>
      </div>
    </div>
  )
}
export default FooterComponent
