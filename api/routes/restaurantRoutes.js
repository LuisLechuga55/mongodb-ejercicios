import express from 'express';
import { restaurantController } from '../controllers/index.js';

const router = express.Router();

router.get('/restaurants', restaurantController.getAllRestaurants);

router.get('/fiveRestaurants', restaurantController.getFiveRestaurants);

router.get('/6to10Restaurants', restaurantController.getSpecificRestaurants);

export default router;