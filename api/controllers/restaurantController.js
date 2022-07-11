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

const onlyRestaurantsWil = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      name: /Wil/,
    });
    return res.json({
      msg: 'Encontrado los Restaurantes que empiezan con Wil',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los restaurantes',
      error,
    })
  }
};

const allRestaurantsInBronxAmericanChinese = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      borough: 'Bronx',
      $or: [{ cuisine: { $in: 'American ' } }, { cuisine: { $in: 'Chinese' } }],
    });
    return res.json({
      msg: 'Todos los Restaurantes en Bronx de comida americana o China ',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Restaurantes',
      error,
    });
  }
};

const getRestaurantsStateIslandQueensBronxor = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      $or: [
        { borough: { $in: 'Staten Island'} },
        { borough: { $in: 'Queens'}},
        { borough: { $in: 'Brooklyn'}},
        { borough: { $in: 'Bronx'}},
      ],
    });
    return res.json({
      msg: 'Todos los restaurantes de Staten Island, Queens, Bronx o Brooklyn',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los restaurantes',
      error,
    });
    
  }
};

const getRestaurantsNotAmericanChinese = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      $and: [
        { cuisine: { $nin: 'American '} },
        { cuisine: { $nin: 'Chinese'}},
      ],
    });
    return res.json({
      msg: 'Todos los restaurantes que no incluyan comida Americana o China',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los restaurantes',
      error,
    });
  }
};

const allRestaurantsDateGradeAScoreEleven = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      grades: {
        $elemMatch: {
          date: {
            $in: '2014-08-11',
          },
          grade: {
            $in: 'A',
          },
          Score: {
            $in: 11
          },
        },
      },
    });
    return res.json({
      msg: 'Todos los restaurantes del dia 11-08-2014 con Grado A y Score 11',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los restaurantes',
      error,
    });
  }
};

/* Ejercicio 15.-
Todos los nombres de los restaurantes ordenados
alfabéticamente */

const getRestaurantsAlphabetic = async (req, res) => {
 try {
  const restaurants = await Restaurant.find({}, {name: 1, _id: 0}).sort({name: 1});
  return res.json({
    msg: 'Todos los restaurantes ordenados alfabeticamente',
    data: restaurants.map((restaurant) => {
      return restaurant.name
    }),
  });
  
 } catch (error) {
  return res.status(500).json({
    msg: 'Error al encontrar los restaurantes',
    error,
  });
 }
};


/**
 *
Ejercicio 16.-
Todos los restaurantes que tengan dirección


Ejercicio 17.-
Los 10 mejores restaurantes ordenados por el promedio de
sus puntajes (score)
 */


export {
  getAllRestaurants,
  getFiveRestaurants,
  getSpecificRestaurants,
  getScoreGreater90,
  getScoreGreater90Lower100,
  getRestaurantAmericanGreater70,
  firstWithoutId,
  onlyNamesRestaurants,
  onlyAmericanRestaurantsA,
  onlyRestaurantsWil,
  allRestaurantsInBronxAmericanChinese,
  getRestaurantsStateIslandQueensBronxor,
  getRestaurantsNotAmericanChinese,
  allRestaurantsDateGradeAScoreEleven,
  getRestaurantsAlphabetic
}