

var moodModule = require('./mood.js')
var tweetModule = require('./tweeter.js')

var mood = 0;
var nrOfBrews = 1;


moodModule(getMood)

 function getMood(err, data){
	mood = data;

mood = mood + mood*(nrOfBrews*0.1)

console.log('humöret är ' +mood)

}


tweetModule(mood, getTweet)

function getTweet(err, data){
	console.log(data)
}