'use strict';



'use strict';


let sqlDb;
exports.eventsDBSetup = function (connection) {
  sqlDb = connection;
  console.log("checking if the events table exists");
  return sqlDb.schema.hasTable("events").then((exists) => {
    if (!exists) {
      console.log("the events table doesn’t exists");

    } else {
      console.log("the events table exists");
    }
  });
};
/**
 * Get all Events names in the database
 *
 * returns List
 **/
exports.getEvents = function({month,staffID}) {
  const query = sqlDb("events")
  .select('events.*')
  .select('staff.staffid as organiser_id')
  .select('staff.name as organiser_name')
  .select('services.name as service_name')
  .select('services.link as service_link')
  // .select('events.*,services.link as service_link,staff.name as organiser_name')
  .leftJoin('services', 'services.serviceid', '=', 'events.service')
  .leftJoin('staff', 'staff.staffid', '=', 'events.organiser')
  if(month && month !=='all'){
    query.andWhereRaw(`EXTRACT(MONTH FROM events.date::date) = ?`, [month])
  }
  if(staffID &&  Number.isInteger(staffID)){
    query.where('staff.staffid', staffID)
  }
  return query
  .then(data => {
    return data;
  });
}
/**
 * Get all Events names in the database from staffid
 *
 * returns List
 **/
exports.getEventsByStaffId = function(staffid) {
  return sqlDb("events")
  .select('events.*')
  .select('staff.staffid as organiser_id')
  .select('staff.name as organiser_name')
  .select('services.name as service_name')
  .select('services.link as service_link')
  // .select('events.*,services.link as service_link,staff.name as organiser_name')
  .innerJoin('services', 'services.serviceid', '=', 'events.service')
  .innerJoin('staff', 'staff.staffid', '=', 'events.organiser')
  .where({'staff.staffid': staffid})
  .then(data => {
    return data;
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

