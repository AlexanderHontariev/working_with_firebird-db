var Firebird = require('node-firebird');

var queryStrAll = 'select * from LIGHTNING';
var queryStr = 'select * from LIGHTNING where (TYPES = ? or TYPES = ?) and TIMES > ? and TIMES < ?';

		         // cloud, ground, timeEnd, timeStart
var queryParams = [ 1, 0, '2017-4-14T07:10:00.000Z', '2017-4-14T10:10:00.000Z' ];

var dbOptions = {};
dbOptions.host = '192.168.1.5';
dbOptions.port = 3050;
dbOptions.database = '/work/db/firebird/meteo.gdb';
dbOptions.user = 'sysdba';
dbOptions.password = 'dvvdendem';
dbOptions.role = null;			// default 
dbOptions.pageSize = 4096;		// default

module.exports = function(req, res) {

		Firebird.attach(dbOptions, function(err, db) {

		if (err) {
			err.message += 'line 20';
			throw err;
		}

		db.query(queryStr, queryParams, function (err, result) {

			if (err) {
				err.message += 'line 27';
				throw err;
			}
				console.log(result);
				res.send(result);
				db.detach(); // close connection
			});
	});
}