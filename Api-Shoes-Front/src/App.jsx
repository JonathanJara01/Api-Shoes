/* Este es mi archivo enrutador contiene todos los sitios a los cuales va a ir mi aplicacion en el front o cliente */
//importacion de css
import './App.css';
//importacion de mis enrutadores  
import { Routes, Route } from 'react-router-dom';
//rutas
import Home from './components/Home';

function App() {


  return (
    <div className='App'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
