//importacion de todas las actions para darselas al reducer
import { GET_ALL_SHOES } from './actions';

// estado inicial con un arreglo vacio donde posteriormente se almacenaran todos los productos
const initialState = {
    allShoes: []
  };

  export default function rootReducer(state = initialState, action) {
    console.log("Llamado del reducer: ");
    switch (action.type) {
        case GET_ALL_SHOES:
            if (action.payload) {
                return {
                  ...state,
                  allShoes: action.payload,
                };
              } else {
                return {
                  ...state,
                  allShoes: [],
                };
              }

        default:
            return state;
    }
}