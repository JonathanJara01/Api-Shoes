const axios = require('axios');


//Acá viene la API
const {URL_LINK} = process.env
// Acá viene la base de datos

// Acá viene link de la API



//DE LA API
const getAllProductsApi = async () => {
    
    const responseProducts = await axios.get(`${URL_LINK}?`)
    const productsFromApi = responseProducts.data.map((dog) => {
      return {
        id: dog.id,
        image: dog.reference_image_id,
        name: dog.name,
        temperament: dog.temperament,
        weight: dog.weight,
        origin: dog.origin,
        temperamentCC: dog.temperament,
      };
    });

  return productsFromApi
};



// DE LA DB
const getAllProducts = async () => {
    const shoesDB = await shoes.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"], // Excluye createdAt y updatedAt del modelo "Dogs"
      },
    });
};


module.exports = {
    getAllProducts
};

