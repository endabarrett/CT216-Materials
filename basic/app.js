'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Basic = new Module('basic');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Basic.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Basic.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Basic.menus.add({
    title: 'Basic Example',
    link: 'basic example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Basic.aggregateAsset('css', 'basic.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Basic.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Basic.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Basic.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Basic;
});
