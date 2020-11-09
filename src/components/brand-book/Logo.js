import React from 'react'

const LogoComponent = (scope) => {
  return (
    <div id='logo' className='section-container logo'>
      <div className='section-intro flex-reverse'>
        <div className='description'>
          <h1 className='custom-underline'>Logo</h1>
          <p>
            Our logo is made out of simple and intertwined geometrical shapes.
            It represents the principles of architecting solutions and
            simplifying them for efficient consumption.
          </p>
          <a
            className='btn btn-primary'
            href='https://gitlab.com/SUSE-UIUX/eos-backup/-/tree/master/eos-website-design/Assets/logo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Download EOS logos
          </a>
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
      <div className='sections-row'>
        <div className='flex'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/main-logo.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
        <div className='flex space-between'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/vertical-logo.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-wordmark.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
      </div>
      <div className='sections-row'>
        <h2>Clear space</h2>
        <p>
          EOS logo needs to have clear space, free of text, pictures, and other
          elements. Minimum clear space is equal to 1/3 of the logo’s width.
        </p>
        <div className='flex'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/clear-space-eg-1.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
        <div className='flex space-between'>
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
          The primary color of our logo is red #EF0B1E and the wordmark is black
          #000000. When the red logo cannot be applied, use black or white
          depending on the background color.
        </p>
        <div className='sections-row logo-color-section flex space-between'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/color-logo-eg-1.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/color-logo-eg-2.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
        <div className='sections-row logo-color-section dark flex space-between'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/color-logo-eg-light-1.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/color-logo-eg-light-2.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
      </div>
      <div className='sections-row'>
        <h2 className='do-not-headeing'>Dont</h2>
        <div className='flex do-not space-between'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-dont-word-mark-1.svg`)}
              alt='LogoDesign'
            />
            <p>Don’t change word mark font</p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-dont-word-mark-2.svg`)}
              alt='LogoDesign'
            />
            <p>Don’t change word mark color</p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/logo-dont-word-mark-3.svg`)}
              alt='LogoDesign'
            />
            <p>
              Don’t resize the logo
              <br />
              disproportionately
            </p>
          </div>
        </div>
        <div className='flex do-not space-between'>
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
