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

const getFiveRestaurants = async (_, res) => {
  try {
    const restaurants = await Restaurant.find().limit(5);
    return res.json({
      msg: '5 Restaurantes obtenidos',
      restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar los Restaurantes',
      error,
    });
  }
};

const getSpecificRestaurants = async (_, res) => {
  try {
    const restaurants = await Restaurant.find().skip(5).limit(5);
    return res.json({
      msg: 'Restaurantes 6 a 10 obtenidos',
      restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Restaurantes',
      error,
    });
  }
};

export {
  getAllRestaurants,
  getFiveRestaurants,
  getSpecificRestaurants
}