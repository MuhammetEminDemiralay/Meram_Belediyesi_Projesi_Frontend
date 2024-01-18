import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/js/dist/modal.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.min.css'
import 'boxicons/dist/boxicons.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import AuthChecker from './Helper/AuthChecker.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(


    <Provider store={store}>
        <AuthChecker>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthChecker>
    </Provider>
)
