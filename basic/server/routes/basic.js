'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Basic, app, auth, database) {

	// Explain the different between passing in a path to require and not
  var vehicles = require('../controllers/basic')();

  app.get('/api/basic/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });
  
  app.get('/api/basic/example/json',vehicles.all);

  app.get('/api/basic/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/basic/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/basic/example/render', function(req, res, next) {
    Basic.render('index', {
      package: 'basic'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
