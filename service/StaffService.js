'use strict';


let sqlDb;
exports.staffDBSetup = function (connection) {
  sqlDb = connection;
  console.log("checking if the staff table exists");
  return sqlDb.schema.hasTable("staff").then((exists) => {
    if (!exists) {
      console.log("the staff table doesn’t exists");

    } else {
      console.log("the staff table exists");
    }
  });
};


/**
 * Get all staff members in the database
 *
 * returns List
 **/
/*
exports.getStaff = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "staffID" : "1",
  "name" : "Bruno Andreoni",
  "role" : "he president of Milcare",
  "description" : "The Cascina Brandezzata project is now fully operational: the historic farmhouse located in via Ripamonti 428 has been completely renovated and is now home to a Hospice for Terminal Patients and an Interdepartmental University Center for training and research in Palliative Care and in Therapy of ache."
}, {
  "staffID" : "1",
  "name" : "Bruno Andreoni",
  "role" : "he president of Milcare",
  "description" : "The Cascina Brandezzata project is now fully operational: the historic farmhouse located in via Ripamonti 428 has been completely renovated and is now home to a Hospice for Terminal Patients and an Interdepartmental University Center for training and research in Palliative Care and in Therapy of ache."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}*/




//------- another try for all people on the staff database------
exports.getStaff = function () {
  return sqlDb("staff")
    .select()
    .then(data => {

      return data;
    });
};

//--------


/**
 * member  by ID
 * Returns the names,role and short descriptions.
 *
 * staffID Long member id to return
 * returns List
 **/
/*
exports.getStaffID = function(staffID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "staffID" : "1",
  "name" : "Bruno Andreoni",
  "role" : "The president of Milcare",
  "description" : "The Cascina Brandezzata project is now fully operational: the historic farmhouse located in via Ripamonti 428 has been completely renovated and is now home to a Hospice for Terminal Patients and an Interdepartmental University Center for training and research in Palliative Care and in Therapy of ache."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
} */


//try another way return staff by id
exports.getStaffID = function (staffid) {
  return sqlDb("staff")
  .select()
  .where({staffid: staffid}).
  then(data => {
    return data;
  });
};
