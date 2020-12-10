'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.getServices = function getServices (req, res, next) {
  Services.getServices()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServicesID = function getServicesID (req, res, next) {
  var serviceID = req.swagger.params['serviceID'].value;
  Services.getServicesID(serviceID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
