'use strict';

var utils = require('../utils/writer.js');
var Staff = require('../service/StaffService');

module.exports.getStaff = function getStaff (req, res, next) {
  Staff.getStaff()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStaffID = function getStaffID (req, res, next) {
  var staffID = req.swagger.params['staffID'].value;
  Staff.getStaffID(staffID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
