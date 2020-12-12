let {staffDBSetup} = require("./StaffService");
let {eventsDBSetup} = require("./EventsService");


const sqlDbFactory = require("knex");
 let sqlDb = sqlDbFactory({
	client: "pg",
	// debug: true,
	connection: {
		host : 'ec2-54-156-47-113.compute-1.amazonaws.com',
		user : 'oeqfbbnyfbbuau',
		password : 'b174bb8352c0f162bc733f02746d44627bb36fe96a2c2843e0a41c66f02f0c2b',
		database : 'd7k9ujco71254k',
		evictionRunIntervalMillis: 1,
		idleTimeoutMillis: 1000,
		ssl: { rejectUnauthorized: false }
	  }
	});
							// you have to return all services   // promise for all (check it on google)
function setupDataLayer(){  // setup booksdbsetup with sqlDb variable , the actual connection to dabase
	console.log("setting up data layer");
	eventsDBSetup(sqlDb);
	return staffDBSetup(sqlDb);
    }

module.exports = {database: sqlDb, setupDataLayer};