'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.getEvents = function getEvents (req, res, next) {
  var month = req.swagger.params['month'].value;
  var staffID = req.swagger.params['staffID'].value;
  const filters = {
    month:month,
    staffID:staffID
  }
  Events.getEvents(filters)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log('response errpr',response)
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
module.exports.getEventsBystaffID = function getEventsID (req, res, next) {
  var staffid = req.swagger.params['staffID'].value;
  Events.getEventsByStaffId(staffid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
