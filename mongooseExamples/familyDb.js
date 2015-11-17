var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb2140be:ro1sos@danu7.it.nuigalway.ie:8717/mongodb2140');

var Family = mongoose.model('Family', { surname: String, address:String, members:Number });

var family = new Family({ surname: 'Murphy', address: 'Galway', members: 4  });
family.save(function (err) {
  if (err) // ...
  console.log('Finished');
});
