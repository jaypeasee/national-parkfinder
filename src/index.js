import * as React from "react"
import * as ReactDOM from "react-dom"
import './index.scss'
import App from './App/App.tsx'
import { BrowserRouter } from 'react-router-dom'

const router = <BrowserRouter> <App /></BrowserRouter>
ReactDOM.render(
  router,
  document.getElementById('root')
);
