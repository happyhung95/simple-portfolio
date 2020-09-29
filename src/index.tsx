import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import makeStore from './redux/store'

const store = makeStore()

const WithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<WithProvider />, document.getElementById('root'))
