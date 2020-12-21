'use strict';

let sqlDb;
exports.servicesDBSetup = function (connection) {
  sqlDb = connection;
  console.log("checking if the services table exists");
  return sqlDb.schema.hasTable("services").then((exists) => {
    if (!exists) {
      console.log("the services table doesn’t exists");

    } else {
      console.log("the services table exists");
    }
  });
};
/**
 * Get all services in the database
 *
 * returns List
 **/
exports.getServices = function() {
return sqlDb("services")
.select()
.orderBy('serviceid', 'asc')
.then(data => {

  return data;
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
  return sqlDb("services")
  .select('services.*')
  .select('staff.staffid')
  .select('staff.name as staffname')
  .select(sqlDb.raw(`json_agg(json_build_object('eventid',events.eventid,'name',events.name)) as events`))
  .select(sqlDb.raw(`json_agg(json_build_object('imageid',images.imageid,'link',images.link)) filter (where images.imageid is not null) as images`))
  .leftJoin('staff', 'staff.staffid', '=', 'services.organiser')
  .leftJoin(sqlDb.raw(`events on events.eventid = ANY(services.events)`))
  .leftJoin(sqlDb.raw(`images on images.type_id = services.serviceid  and images.type=1`))
  .where('services.serviceid', serviceID)
  .groupBy('services.serviceid')
  .groupBy('staff.staffid')
  .then(data => {
    return data;
  });
}

