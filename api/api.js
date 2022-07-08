import express from "express";

const api = express();

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

export default api;