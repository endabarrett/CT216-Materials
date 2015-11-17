'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Vehicle = mongoose.model('Vehicle') 

module.exports = function() {

    return {        
        /**
         * List all Vehicles
         */
        all: function(req, res) {
            Vehicle.find(function(err, vehicles) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the vehicles'
                    });
                }
                console.log(vehicles); //Log for debugging purposes
                res.json(vehicles);
            });

        }        
    };
}
