import http from 'http';
import config from './config/index.js';
import api from './api/api.js';
import database from './config/database.js';

const port = config.server.port;
const server = http.createServer(api);

server.on('listening', ()=> {
  console.log(`Servidor ejecutandose en http://localhost:${port}`);
})

server.on('error', (err) => {
  console.error('Ha ocurrido un error en el server', err);
})

server.listen(port);

database();