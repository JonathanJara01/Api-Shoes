import PropTypes from 'prop-types';

const Shoe = ({ _id, name, specialPrices, inStock, basePrice, brand }) => {
  const inStockOn = inStock ? 'Disponible' : 'No Disponible';

  return (
    <div className="card shadow">
      <div className="card-body">
        <h1 className="card-title">Name: {name}</h1>
        <h5>Ref: {_id}</h5>
        <h2>special Prices: {JSON.stringify(specialPrices)}</h2>
        <h2>in stock: {inStockOn}</h2>
        <h2>price: {basePrice}</h2>
        <h2>brand: {brand}</h2>
      </div>
    </div>
  );
};

Shoe.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialPrices: PropTypes.object.isRequired,
  inStock: PropTypes.bool.isRequired,
  basePrice: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
};

export default Shoe;
