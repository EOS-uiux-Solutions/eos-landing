import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/Navigation'
import FooterComponent from '../components/Footer'
const Vision = () => {
  return (
    <>
      <Helmet>
        <title>Our Vision and Mission | EOS Brand Book</title>
        <meta
          name='description'
          content='We want to reshape the enterprise and open source worlds with applications people love to use. Our mission is to empower creativity by making UX and UI easily accessible to designers and developers.'
        />
        <meta
          name='keywords'
          content='open source, design community, ux community, open source community, ux research tools, ux power tools, ux tools'
        />
      </Helmet>

      <div className='vision-content'>
        <Navigation />
        <div className='main-content-wrapper'>
          <div className='section-intro flex-reverse'>
            <div className='description'>
              <h1>OUR VISION</h1>
              <p className='subheading'>
                To reshape the enterprise and open source worlds with
                applications people love to use.
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
    </>
  )
}

export default Vision
