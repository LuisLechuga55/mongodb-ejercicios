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

/* Ejercicio 11.-
Todos los restaurantes de Bronx que tengan comida Americana
o China */

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

/**
 * 
Ejercicio 9.-
Todos los restaurantes que sean de cocina 'American '
con al menos un graode  'A' y que no sean de la ciudad Brooklyn

*
Ejercicio 10.-
Todos los restaurantes que su nombre empiece con 'Wil'


Ejercicio 11.-
Todos los restaurantes de Bronx que tengan comida Americana
o China


Ejercicio 12.-
Todos los restaurantes de Staten Island o Queens
o Bronxor Brooklyn.


Ejercicio 13.- Todos los restaurantes que no tengan comida
americana ni china


Ejercicio 14.-
Todos los restaurantes que el día 11-08-2014 hayan
tenido una calificación de A y un puntaje de 11


Ejercicio 15.-
Todos los nombres de los restaurantes ordenados
alfabéticamente


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
  allRestaurantsInBronxAmericanChinese
}