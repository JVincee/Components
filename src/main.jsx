import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Mynav from './components/nav'
import Mycontent from './components/content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Mynav/>
    <Mycontent/>
  </React.StrictMode>,
)
