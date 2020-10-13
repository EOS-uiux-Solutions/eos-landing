import React from 'react'

const FooterComponent = () => {
  return (
    <div className='section-container'>
      <div className='get-in-touch'>
        <h3>Get in touch with us</h3>
        <a
          href='https://twitter.com/eosdesignsystem'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={require(`../../assets/images/brand_assets/twitter.svg`)}
            alt='twitter'
          />
        </a>
        <a
          href='https://www.linkedin.com/company/eosdesignsystem/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={require(`../../assets/images/brand_assets/linkedin.svg`)}
            alt='linkedin'
          />
        </a>
      </div>
      <div className='get-in-touch'>
        <h3>EOS Products</h3>
        <ul className='product-list'>
          <li>
            <a
              href='https://www.eosdesignsystem.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Design system
            </a>
          </li>
          <li>
            <a
              href='https://userstory.eosdesignsystem.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              User story
            </a>
          </li>
          <li>
            <a
              href='https://icons.eosdesignsystem.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Icons
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default FooterComponent
