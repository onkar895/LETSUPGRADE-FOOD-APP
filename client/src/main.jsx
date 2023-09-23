import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Context/Context.jsx'
import { Provider } from 'react-redux'
import Store from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <AppProvider>
    <App />
    </AppProvider>
    </Provider>
  </React.StrictMode>,
)
