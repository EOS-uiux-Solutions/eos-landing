import React from 'react'
import Navigation from '../components/Navigation'
import MeinMenu from '../components/MeinMenu'

import LogoComponent from '../components/brand-book/logo'
import ColorPaletteComponent from '../components/brand-book/color-palette'
import TypographyComponent from '../components/brand-book/typography'
import IllustrationsPatternsComponent from '../components/brand-book/illustrations-patterns'
import FooterComponent from '../components/brand-book/footer'

const BrandBook = () => {
  return (
    <div>
      <Navigation />
      <MeinMenu type='myRef' />
      <div className='content'>
        <div className='section-container'>
          <div className='brand-book-container'>
            <h1 className='custom-underline'>EOS Brand book</h1>
            <p className='subheading'>
              Below you will find the building elements of our brand’s visual
              identity. We want to make sure that our brand’s mission, image,
              and core values are presented consistently.
            </p>
          </div>
        </div>

        {/* Logo section */}
        <LogoComponent />

        {/* color-palette container */}
        <ColorPaletteComponent />
        {/* Typography container */}
        <TypographyComponent />

        {/* color-palette container */}
        <IllustrationsPatternsComponent />
        <FooterComponent />
      </div>
    </div>
  )
}

export default BrandBook
