import React from 'react'
import { Router } from '@reach/router'
import BrandBook from './pages/BrandBook'
import ContributingGuide from './pages/ContributingGuide'
import Vision from './pages/Vision'

function App() {
  return (
    <Router primary={false}>
      <BrandBook path='/' />
      <ContributingGuide path='/ContributingGuide' />
      <Vision path='/Vision' />
    </Router>
  )
}

export default App
