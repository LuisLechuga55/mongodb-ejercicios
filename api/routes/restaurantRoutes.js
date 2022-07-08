import express from 'express';
import { restaurantController } from '../controllers/index.js';

const router = express.Router();

router.get('/restaurants', restaurantController.getAllRestaurants);

router.get('/fiveRestaurants', restaurantController.getFiveRestaurants);

router.get('/especificRestaurants', restaurantController.getSpecificRestaurants);

export default router;