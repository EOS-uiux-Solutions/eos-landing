import React from 'react'
import { Router } from '@reach/router'
import BrandBook from './pages/BrandBook'
import ContributingGuide from './pages/ContributingGuide'
import Vision from './pages/Vision'

function App() {
  return (
    <Router primary={false}>
      <Vision path='/' />
      <BrandBook path='/BrandBook' />
      <ContributingGuide path='/ContributingGuide' />
    </Router>
  )
}

export default App
