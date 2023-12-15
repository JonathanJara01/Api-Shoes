
// funciones de redux para traer el estado global y usarlo
import {useDispatch, useSelector} from 'react-redux';
// funciones de montado de la pagina de react.
import { useEffect, useRef } from 'react';
import Shoe from './Shoe';
import { getAllShoes } from '../redux/actions';

const Shoes = () => {

  const dispatch = useDispatch();
  const allShoes = useSelector((state)=> state.allShoes); // id - name - specialprice - instock - baseprice - brand

   useEffect(() => {
    if (allShoes.length === 0) {
      dispatch(getAllShoes());
    }
  }, [dispatch, allShoes]);
  console.log('Esto es lo que tengo en el estado allShoes: ' + JSON.stringify(allShoes, null, 2));
  
  return (
    <div className="row text-center">
        {allShoes.map((zapato, index)=>(
          <Shoe
            key={`${zapato._id}_${index}`}
            _id={zapato._id}
            name={zapato.name}
            specialPrice={zapato.specialPrice}
            inStock={zapato.inStock}
            basePrice={zapato.basePrice}
            brand={zapato.brand}
            />
          ))}
    </div>
  )
}

export default Shoes