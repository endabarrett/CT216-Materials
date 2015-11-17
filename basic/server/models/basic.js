'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Vehicle Schema
 */
var VehicleSchema = new Schema({
  make: { type: String },
  model: { type: String },
  age: { type: Number },
  mileage: { type: Number } 
});

mongoose.model('Vehicle', VehicleSchema);
