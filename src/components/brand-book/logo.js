import React from 'react'

const LogoComponent = (scope) => {
  return (
    <div id='logo' className='section-container logo'>
      <div className='section-intro'>
        <div className='description'>
          <h1 className='custom-underline'>Logo</h1>
          <p>
            Our logo is made out of simple and intertwined geometrical shapes.
            It represents the principles of architecting solutions and
            simplifying them for efficient consumption.
          </p>
        </div>
        <div className='logos-images'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/eos-logos-sample1.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/eos-logos-sample2.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
      </div>
      <div className='sections-row logo-download flex'>
        <div className='logo-download-box'>
          <div>
            <img
              src={require(`../../assets/images/brand_assets/eos-logos-sample2.svg`)}
              alt='LogoDesign'
            />
            <br />
            Download color logo
          </div>
        </div>
        <div className='logo-download-box logo-monochromatic-box'>
          <div>
            <img
              src={require(`../../assets/images/brand_assets/logo-color-white2.svg`)}
              alt='LogoDesign'
            />
            <br />
            Download the
            <br />
            monochromatic logo
          </div>
        </div>
      </div>
      <div className='sections-row'>
        <h2>Clear space</h2>
        <p>
          EOS logo needs to have clear space, free of text, pictures, and other
          elements. Minimum clear space is equal to 1/3 of the logo’s width.
        </p>
        <div className='logo-example flex'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/clear-space-eg-1.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/clear-space-eg-2.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/clear-space-eg-3.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
      </div>
      <div className='sections-row'>
        <h2>Color</h2>
        <p>
          The primary color of our logo is red #EF0B1E. When the red logo cannot
          be applied, use black or white depending on the background color.
        </p>
        <div className='logo-example flex'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/eos-logos-sample2.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-color-white.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-color-black.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
      </div>
      <div className='sections-row'>
        <h2 className='do-not-headeing'>Dont</h2>
        <div className='logo-example flex do-not'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-dont-eg-1.svg`)}
              alt='LogoDesign'
            />
            <p>
              Don’t separate letters
              <br />
              of EOS logo
            </p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-dont-eg-2.svg`)}
              alt='LogoDesign'
            />
            <p>Don’t rotate logo</p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-dont-eg-3.svg`)}
              alt='LogoDesign'
            />
            <p>
              Don’t use color combinations that
              <br />
              don’t have good contrast ratio
            </p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-dont-eg-4.svg`)}
              alt='LogoDesign'
            />
            <p>
              Don’t use only first
              <br />
              letter of the logo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LogoComponent
