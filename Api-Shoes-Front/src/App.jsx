/* Este es mi archivo enrutador contiene todos los sitios a los cuales va a ir mi aplicacion en el front o cliente */
//importacion de css
import './App.css';
//importacion de mis enrutadores  
import { Routes, Route } from 'react-router-dom';
//rutas
import Home from './components/Home';
import Usuario from './components/Usuario';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3002';

function App() {


  return (
    <div className='container'>
      <div className='row col-sm-12 col-md-12 col-lg-12 col-xl-12  mb-3'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:user_id' element={<Usuario/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
