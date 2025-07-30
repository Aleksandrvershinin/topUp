import { createRoot } from 'react-dom/client'
import '../css/app.css'
import * as React from 'react'
import { App } from './app/App'

const rootEl = document.getElementById('app')

if (rootEl) {
    const root = createRoot(rootEl)
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
