import React from 'react'
import ReactDOM from 'react-dom/client'

// third party
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// project imports
// import * as serviceWorker from 'serviceWorker'
import App from 'App'
import { store } from 'store'

// style + assets
import 'assets/scss/style.scss'

(async function run() {
  if (process.env.NODE_ENV === 'development') {
    const worker = await import('./mocks/browser')
    await worker.default.start()
  }
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  )
}())
