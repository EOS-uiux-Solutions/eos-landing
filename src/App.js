import React from 'react'
import { Router } from '@reach/router'
import BrandBook from './pages/brand-book'
import ContributingGuide from './pages/contributing-guide'

function App() {
  return (
    <Router primary={false}>
      <BrandBook path='/' />
      <ContributingGuide path='/ContributingGuide' />
    </Router>
  )
}

export default App
