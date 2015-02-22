
var weather_module = require('./weather.js')// require weather reading module


var date = new Date();
var day = 0;
var temp = 0;
var mood = 30 + 30*Math.random() //Random initial mood, min 30, max 60.


function moodFunc(yourCallBack){

weather_module(getTemp)	
day = date.getDay();

function getTemp(err, data){ 
temp = data;
}

if(temp<-10) //If colder than -10 degrees, decrease mood
{
	mood = mood-20;
}



if(temp>-10 && temp<0) //If colder than 0 degrees & warmer than -10, decrease mood
{
	mood = mood-10;
}

if(temp>0 && temp<10) //If warmer than 0 degrees & colder than 10, increase mood
{
	mood = mood + 10;
}

if(temp>10) //If warmer than 10 degrees, increase mood
{
	mood = mood+20;
}


if(day === 1) // If monday, decrease mood
{
	mood = mood - 25;
}

if(day === 6) // If friday, increase mood
{
	mood = mood + 30;
}

console.log(temp +'grader')
console.log(day)





yourCallBack(null, mood)

}

module.exports = moodFunc;