'use strict';


/**
 * Get all services in the database
 *
 * returns List
 **/
exports.getServices = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "serviceID" : "1",
  "title" : "Hospice",
  "description" : "The Hospice Milcare is a house with open windows on the world, where some sick people have accepted to live with dignity the final stage of their lives, assisted by their family members and social and health operators trained."
}, {
  "serviceID" : "1",
  "title" : "Hospice",
  "description" : "The Hospice Milcare is a house with open windows on the world, where some sick people have accepted to live with dignity the final stage of their lives, assisted by their family members and social and health operators trained."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Service names by ID
 * Returns the names, short descriptions, and UUIDS of all services
 *
 * serviceID Long serviceid of return
 * returns List
 **/
exports.getServicesID = function(serviceID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "serviceID" : "1",
  "title" : "Hospice",
  "description" : "The Hospice Milcare is a house with open windows on the world, where some sick people have accepted to live with dignity the final stage of their lives, assisted by their family members and social and health operators trained."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

