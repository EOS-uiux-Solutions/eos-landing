import React from 'react'
import Navigation from '../components/Navigation'
import MainMenu from '../components/MainMenu'

import LogoComponent from '../components/brand-book/Logo'
import ColorPaletteComponent from '../components/brand-book/ColorPalette'
import TypographyComponent from '../components/brand-book/Typography'
import IllustrationsPatternsComponent from '../components/brand-book/IllustrationsPatterns'
import FooterComponent from '../components/brand-book/Footer'

const BrandBook = () => {
  return (
    <div>
      <Navigation />
      <MainMenu type='myRef' />
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
