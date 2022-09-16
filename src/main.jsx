import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NumberBox from './NumberBox'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <NumberBox/>
  </React.StrictMode>
)
