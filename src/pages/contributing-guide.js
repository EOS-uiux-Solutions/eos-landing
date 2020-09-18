import React from 'react'
import Navigation from '../components/Navigation'
import HeaderComponent from '../components/contributing-guide/header'
import SubheadingComponent from '../components/contributing-guide/subheading'
import MainContent from '../containers/contributing-guide/main-content'
import FooterComponent from '../components/contributing-guide/footer'
const ContributingGuide = () => {
  return (
    <div className='contribute-page'>
      <Navigation />
      <HeaderComponent />
      <SubheadingComponent />
      <MainContent />
      <FooterComponent />
    </div>
  )
}

export default ContributingGuide
