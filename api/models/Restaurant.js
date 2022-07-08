import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  building: String,
  coord: [ Number, Number ],
  street: String,
  zipcode: String
});

const gradesSchema =  new mongoose.Schema({
  date: Date,
  grade: String,
  score: Number,
});

const restaurantSchema = new mongoose.Schema({
  address: addressSchema,
  borough: String,
  cuisine: String,
  grades: [gradesSchema],
  name: String,
  restaurant_id: String,
});

export default mongoose.model('Restaurant', restaurantSchema );