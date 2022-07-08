import { Restaurant } from '../models/index.js'

const getAllRestaurants = async (_, res) => {
  try {
    const restaurants = await Restaurant.find();
    return res.json({
      msg: 'Restaurantes obtenidos',
      restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar todos los Restaurantes',
      error,
    });
  }
};

export {
  getAllRestaurants,
}