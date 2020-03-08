import React from 'react'
import App from './App.js'
import ReactDOM from 'react-dom'
import configureStore from './store/configStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'


const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

const ele =(
    <Provider store = { store }>
        <App />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'))