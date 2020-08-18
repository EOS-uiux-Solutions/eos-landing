import React from 'react'
import NavbarComponent from '../components/contributing-guide/navbar'
import HeaderComponent from '../components/contributing-guide/header'
import SubheadingComponent from '../components/contributing-guide/subheading'
import MainContent from '../containers/contributing-guide/main-content'
import FooterComponent from '../components/contributing-guide/footer'
const ContributingGuide = () => {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <SubheadingComponent />
      <MainContent />
      <FooterComponent />
    </div>
  )
}

export default ContributingGuide
