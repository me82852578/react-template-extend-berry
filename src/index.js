import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import { store } from 'store'

// style + assets
import 'assets/scss/style.scss'
import { Provider } from 'react-redux'

(async function run() {
  if (process.env.NODE_ENV === 'development') {
    const worker = await import('./mocks/browser')
    await worker.default.start()
  }
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}())
