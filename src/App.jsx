import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './Router'
import './App.scss'

function App() {
  return (
    <HashRouter>
      <Routes/>
    </HashRouter>
  )
}

export default App
