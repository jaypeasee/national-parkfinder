import * as React from "react"
import * as ReactDOM from "react-dom"
import App from './App/App'
import { BrowserRouter } from 'react-router-dom'

const router = <BrowserRouter>
  <App />
</BrowserRouter>

ReactDOM.render(
  router,
  document.getElementById('root')
)
