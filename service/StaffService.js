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



//try another way return staff by id
exports.getStaffID = function (staffid) {
  console.log('asdasda')
return sqlDb("staff")
.select('staff.*')
.select(sqlDb.raw(`json_agg(json_build_object('serviceid',services.serviceid,'name',services.name)) as services`))
.select(sqlDb.raw(`json_agg(json_build_object('eventid',events.eventid,'name',events.name)) as events`))

.leftJoin('services', 'services.organiser', '=', 'staff.staffid')
.leftJoin('events', 'events.organiser', '=', 'staff.staffid')
.where('staffid', staffid)
.groupBy('staff.staffid')
.then(data => {
  return data;
});
};
