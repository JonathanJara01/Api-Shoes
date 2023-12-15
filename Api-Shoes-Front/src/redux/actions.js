import axios from 'axios'

export const GET_ALL_SHOES = 'GET_ALL_SHOES';

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
