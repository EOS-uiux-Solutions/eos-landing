import React from 'react'
import { Router } from '@reach/router'
import BrandBook from './pages/BrandBook'
import ContributingGuide from './pages/ContributingGuide'

function App() {
  return (
    <Router primary={false}>
      <BrandBook path='/' />
      <ContributingGuide path='/ContributingGuide' />
    </Router>
  )
}

export default App
