import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSpecialPrice } from '../redux/actions';

import imagenUser1 from '../assets/tenisdetras.jpg'
import imagenUser2 from '../assets/user2.png'

const Usuario = () => {
  const dispatch = useDispatch();
  const userSpecialPrices = useSelector((state) => state.userSpecialPrices);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Obtener información del precio especial para user1 y user2
    dispatch(getUserSpecialPrice('user1', 'nombre_producto_1'));
    dispatch(getUserSpecialPrice('user2', 'nombre_producto_2'));
  }, [dispatch]);

  const handleUserSelect = (userId) => {
    // Establecer el usuario seleccionado
    setSelectedUser(userId);
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {/* Agrega botones para cada usuario */}
      <button onClick={() => handleUserSelect('user1')}>Usuario 1</button>
      <button onClick={() => handleUserSelect('user2')}>Usuario 2</button>

      {/* Mostrar la información del usuario seleccionado */}
      {selectedUser && userSpecialPrices[selectedUser] && (
        <div>
            <h2>Precios Especiales para {selectedUser}</h2>
            {Object.entries(userSpecialPrices[selectedUser]).map(([productName, productInfo], index) => (
            <div key={index} className="card shadow align-items-center">
                <div className="card-body">
                <h1 className="card-title">Producto: {productName}</h1>
                {/* Condición para seleccionar la imagen según el usuario */}
                <img src={selectedUser === 'user1' ? imagenUser1 : imagenUser2} alt={`Imagen del usuario ${selectedUser}`} />
                {productInfo.map((product, productIndex) => (
                    <div key={productIndex}>
                    <h2>Marca: {product.brand}</h2>
                    <h2>Precio Especial: {product.specialPrice}</h2>
                    <h2>In Stock: {product.inStock ? 'Sí' : 'No'}</h2>
                    {product.basePrice !== undefined && (
                        <h2>Precio Base: {product.basePrice}</h2>
                    )}
                    {/* Agrega más detalles según sea necesario */}
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
    )}
    </div>
)}


export default Usuario;
















