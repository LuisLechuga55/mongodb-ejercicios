import { Restaurant } from '../models/index.js'

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar todos los Restaurantes',
      error,
    });
  }
};

const getFiveRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().limit(5);
    return res.json({
      msg: '5 Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar los Restaurantes',
      error,
    });
  }
};

const getSpecificRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().skip(5).limit(5);
    return res.json({
      msg: 'Restaurantes 6 a 10 obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Restaurantes',
      error,
    });
  }
};

const getScoreGreater90 = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      grades: {
        $elemMatch: {
          score: {
            $gte: 90,
          },
        },
      },
    });
    return res.json({
      msg: 'Restaurantes con un Score mayor a 90',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Restaurantes',
      error,
    });
  }
};

const getScoreGreater90Lower100 = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      grades: {
        $elemMatch: {
          score: {
            $gt: 80,
            $lt: 100
          },
        },
      },
    });
    return res.json({
      msg: 'Restaurantes con un Score mayor a 80 y menor a 100',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Restaurantes',
      error,
    });
  }
};

const getRestaurantAmericanGreater70 = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: 'American ',
      grades: {
        $elemMatch: {
          score: {
            $gt: 70,
          },
        },
      },
    });
    return res.json({
      msg: 'Restaurantes Americanos con un grado mayor a 70',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Restaurantes',
      error,
    });
  }
};

const firstWithoutId = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({}, {_id: 0}).limit(1);
    return res.json({
      msg: 'Restaurante sin ID',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Restaurantes',
      error,
    });
  }
};

const onlyNamesRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({}, {name: 1, _id: 0});
    return res.json({
      msg: 'Solo los nombres de Resaturantes',
      data: restaurants.map((restaurant) => {
        return restaurant.name
      }),
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Restaurantes',
      error,
    });
  }
};

const onlyAmericanRestaurantsA = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: 'American ',
      grades: {
        $elemMatch: {
          grade: {
            $in: 'A',
          },
        },
      },
      borough: {
        $nin: 'Brooklyn',
      },
    });
    return res.json({
      msg: 'Restaurantes Americanos con un grado mayor a 70',
      data: restaurants,
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
  getSpecificRestaurants,
  getScoreGreater90,
  getScoreGreater90Lower100,
  getRestaurantAmericanGreater70,
  firstWithoutId,
  onlyNamesRestaurants,
  onlyAmericanRestaurantsA
}