import axios from 'axios'

export const GET_ALL_SHOES = 'GET_ALL_SHOES';

export const GET_USER_SPECIAL_PRICE = 'GET_USER_SPECIAL_PRICE';

export function getAllShoes() {
    return async function (dispatch) {
      try {
        const allShoes = await axios.get('http://localhost:3002/products');
        console.log('Datos obtenidos correctamente de la actions:', allShoes.data);
        dispatch({
          type: GET_ALL_SHOES,
          payload: allShoes.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  }

  export function getUserSpecialPrice(userId, productName) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3002/price/${userId}/${productName}`);
  
        dispatch({
          type: GET_USER_SPECIAL_PRICE,
          payload: {
            userId,
            productName,
            specialPrice: response.data,
          },
        });
      } catch (error) {
        console.error(`Error al obtener información del precio especial para ${userId}:`, error.message);
      }
    };
  }


