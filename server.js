var app = require('express')();

// for post query
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/db-data', function(req, res) {
	var getData = require('./firebird');
	getData(req, res);
});

app.listen(3001, function() {
	console.log('Server listening on port 3001');
});

/*
	TYPES - тип заряда {
		0 - молния между тучами,
		1 - молния между землей и небом
	}

	TIMES - время удара молнии

	LATITUDE - широта
	LONGITUDE - долгота

	PEAKCURRENT - мощность заряда | положительный/отрицательный заряд
*/