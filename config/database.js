import mongoose from "mongoose";
import config from "./index.js";

const db = mongoose.connection;

db.on('error', () => {
  console.error('Error al conectarse a db');
})

db.on('connection', () => {
  console.log('Intentando conectar a la base');
})

db.on('connected', () => {
  console.log('Se ha conectado a la base de datos');
})

export default () => {
  mongoose.connect(`${config.database.uri}/${config.database.name}`)
}
