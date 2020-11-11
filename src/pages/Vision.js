import React from 'react'
import Navigation from '../components/Navigation'
import FooterComponent from '../components/Footer'
const Vision = () => {
  return (
    <div className='vision-content'>
      <Navigation />
      <div className='main-content-wrapper'>
        <div className='section-intro flex-reverse'>
          <div className='description'>
            <h1>OUR VISION</h1>
            <p className='subheading'>
              To reshape the enterprise and open source worlds with applications
              people love to use.
            </p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../assets/images/brand_assets/vision.svg`)}
              alt='LogoDesign'
            />
          </div>
        </div>
        <div className='section-intro'>
          <div className='img-wrap'>
            <img
              src={require(`../assets/images/brand_assets/mission.svg`)}
              alt='LogoDesign'
            />
          </div>
          <div className='description'>
            <h1>OUR MISSION</h1>
            <p className='subheading'>
              To empower creativity by making UX and UI easily accessible to
              designers and developers.
            </p>
            <p className='subheading'>
              Our mission is to help deliver quality interfaces while
              accelerating time-to-market.
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}

export default Vision
