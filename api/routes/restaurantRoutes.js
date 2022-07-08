import express from 'express';
import { restaurantController } from '../controllers/index.js';

const router = express.Router();

router
.route('/restaurants')
.get(restaurantController.getAllRestaurants);

export default router;