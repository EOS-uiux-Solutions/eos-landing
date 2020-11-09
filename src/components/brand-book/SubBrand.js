import React from 'react'

const SubBrandComponent = (scope) => {
  return (
    <div id='bubbrand' className='section-container logo'>
      <div className='section-intro flex-reverse'>
        <div className='description'>
          <h1 className='custom-underline'>Sub brand</h1>
          <p>
            To ensure the consistent visual language of the sub-brand we use the
            same architectural principles as for the main logo. Parent logo is
            combined with the wordmark and a sub-brand symbol. The parent logo
            changes the color while the sub-brand wordmark always remains black.
          </p>
        </div>
        <div className='img-wrap'>
          <img
            src={require(`../../assets/images/brand_assets/sub-brand-design.svg`)}
            alt='LogoDesign'
          />
        </div>
      </div>
      <div className='sections-row'>
        <div className='img-wrap'>
          <img
            src={require(`../../assets/images/brand_assets/sub-brand-logo.svg`)}
            alt='LogoDesign'
          />
        </div>
      </div>
      <div className='sections-row'>
        <h2>EOS sub-brands</h2>
        <div className='flex space-between'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/sub-brand-logo-eg-1.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/sub-brand-logo-eg-2.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/sub-brand-logo-eg-3.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
        <div className='flex space-between'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/sub-brand-logo-eg-4.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/sub-brand-logo-eg-5.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/sub-brand-logo-eg-6.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
      </div>
      <div className='sections-row'>
        <h2>Product’s visual identity </h2>
        <p>
          We use the main palette to distinguish the visual identity of our
          products. All shades of one color are applied within one sub-brand as
          shown below.
        </p>
        <div className='flex space-between'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/user-story-visual.svg`)}
              alt='LogoDesign'
            />
            <p>User story</p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/design-system-visual.svg`)}
              alt='LogoDesign'
            />
            <p>Design system</p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/icons-visual.svg`)}
              alt='LogoDesign'
            />
            <p>Icons</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SubBrandComponent
