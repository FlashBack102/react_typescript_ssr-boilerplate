import React from 'react'
import ReactDOM from 'react-dom'
import App from '../pages/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(
  <BrowserRouter>
	  <App />
  </BrowserRouter>,
  document.getElementById('app')
);