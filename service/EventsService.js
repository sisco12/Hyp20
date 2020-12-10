'use strict';


/**
 * Get all Events names in the database
 *
 * returns List
 **/
exports.getEvents = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "eventID" : "1",
  "title" : "Life lecture",
  "description" : "An appointment that over time has found more and more interest and that for this reason this fourth 2020 edition had to be divided into two separate Laboratories: Tuesday and Wednesday laboratories in order to be able to accept all the applications received."
}, {
  "eventID" : "1",
  "title" : "Life lecture",
  "description" : "An appointment that over time has found more and more interest and that for this reason this fourth 2020 edition had to be divided into two separate Laboratories: Tuesday and Wednesday laboratories in order to be able to accept all the applications received."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find Event by eventID
 * return a single event
 *
 * eventID Long eventID of the event to return
 * returns List
 **/
exports.getEventsID = function(eventID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "eventID" : "1",
  "title" : "Life lecture",
  "description" : "An appointment that over time has found more and more interest and that for this reason this fourth 2020 edition had to be divided into two separate Laboratories: Tuesday and Wednesday laboratories in order to be able to accept all the applications received."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

