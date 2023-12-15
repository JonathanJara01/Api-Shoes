//main
import React from 'react'
//dom virtual
import ReactDOM from 'react-dom/client'
//importacion de app
import App from './App.jsx'
//importacion css
import './index.css'
//importacion de el buscador de las rutas
import {BrowserRouter} from 'react-router-dom';
// importacion de la store de redux
import store from './redux/store.js';
//importacion de el provedor de redux
import {Provider} from 'react-redux'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
