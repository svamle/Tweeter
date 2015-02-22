//Function gets called, returns the temperature as integer

var parser = require('xml2js').parseString
var request = require('request')
var Entities = require('html-entities').XmlEntities;
entities = new Entities();
 
module.exports = tempFunc; // tempFunc - return function


var api = 'http://www8.tfe.umu.se/WeatherWebService2012/Service.asmx/Aktuellavarden'
 
function tempFunc(yourCallBack){


	request(api, function(err, res, body) {
		if (err)
		throw err
 
		if (res.statusCode == 200) {
 
		parser(entities.decode(body), {trim: true, normalize: true}, function(err, result) {
			if (err)
			throw err
 
			var data = result.string.root[0]
			var temp = parseFloat(data.tempmed) 

			if (data !== undefined) {

				yourCallBack(null, temp)

			}
		})
 
		} else {
		console.err('Something went wrong!')
		}
	}) 

}