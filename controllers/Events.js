'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.getEvents = function getEvents (req, res, next) {
  Events.getEvents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsID = function getEventsID (req, res, next) {
  var eventID = req.swagger.params['eventID'].value;
  Events.getEventsID(eventID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
