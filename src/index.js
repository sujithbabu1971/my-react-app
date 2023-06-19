import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import Counter from './features/counter/Counter'

// As of React 18
// Let the Index program be the redux example
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Counter/>
  </Provider>
)
