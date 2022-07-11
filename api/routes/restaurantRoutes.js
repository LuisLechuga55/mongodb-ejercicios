import express from 'express';
import { restaurantController } from '../controllers/index.js';

const router = express.Router();

router.get('/restaurants', restaurantController.getAllRestaurants);

router.get('/fiveRestaurants', restaurantController.getFiveRestaurants);

router.get('/6to10Restaurants', restaurantController.getSpecificRestaurants);

router.get('/getScoreGreater90', restaurantController.getScoreGreater90);

router.get('/getScoreGreater80Lower100', restaurantController.getScoreGreater90Lower100);

router.get('/getRestaurantAmericanGreater70', restaurantController.getRestaurantAmericanGreater70);

router.get('/firstWithoutId', restaurantController.firstWithoutId);

router.get('/onlyNamesRestaurants', restaurantController.onlyNamesRestaurants);

router.get('/onlyAmericanRestaurantsA', restaurantController.onlyAmericanRestaurantsA);

router.get('/onlyRestaurantsWil', restaurantController.onlyRestaurantsWil);

router.get('/allRestaurantsInBronxAmericanChinese', restaurantController.allRestaurantsInBronxAmericanChinese);

router.get('/getRestaurantsNotAmericanChinese', restaurantController.getRestaurantsNotAmericanChinese);

router.get('/allRestaurantsDateGradeAScoreEleven', restaurantController.allRestaurantsDateGradeAScoreEleven);


export default router;