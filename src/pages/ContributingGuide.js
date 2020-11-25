import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/Navigation'
import HeaderComponent from '../components/contributing-guide/Header'
import SubheadingComponent from '../components/contributing-guide/Subheading'
import MainContent from '../containers/contributing-guide/MainContent'
// import FooterComponent from '../components/contributing-guide/Footer'
import FooterComponent from '../components/Footer'
const ContributingGuide = () => {
  return (
    <>
      <Helmet>
        <title>Contribute to EOS | EOS Brand Book</title>
        <meta
          name='description'
          content='We want to make it as easy as possible for users to become EOS contributors, so we’ve created this contribution guide to help you get started.'
        />
        <meta name='keywords' content='' />
      </Helmet>
      <div className='contribute-page'>
        <Navigation />
        <HeaderComponent />
        <SubheadingComponent />
        <MainContent />
        <FooterComponent />
      </div>
    </>
  )
}

export default ContributingGuide
