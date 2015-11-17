var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb2140be:ro1sos@danu7.it.nuigalway.ie:8717/mongodb2140');

var Vehicle = mongoose.model('Vehicle', { make: String, model:String, age:Number, mileage:Number});

var vehicle = new Vehicle({ make: 'Ford', model: 'Fiesta', age: 3, mileage:1000 });
vehicle.save(function (err) {
  if (err) // ...
  console.log('Done');
});
