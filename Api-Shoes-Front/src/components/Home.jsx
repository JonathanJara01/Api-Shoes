import React from 'react'
import Shoes from './Shoes'
import Usuario from './Usuario'

const Home = () => {
  return (
    <div className="container my-3">
      <h1>ShoeStore</h1>
      <Usuario/>
      <div className="row animate__animated animate__rubberBand" >
      <Shoes/>
      </div>
    </div>
  )
}

export default Home