import express from "express";
import { restaurantRoutes } from "./routes/index.js";

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(restaurantRoutes);

export default api;