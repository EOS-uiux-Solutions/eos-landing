import React from 'react'
import Navigation from '../components/Navigation'
import HeaderComponent from '../components/contributing-guide/Header'
import SubheadingComponent from '../components/contributing-guide/Subheading'
import MainContent from '../containers/contributing-guide/MainContent'
import FooterComponent from '../components/contributing-guide/Footer'
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
