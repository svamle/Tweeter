var fs = require('fs');

var hashtagList = fs.readFileSync('./hashtag.txt', "utf-8"); //Hämta hashtags
var hashtagSplit = hashtagList.split('\n');

var mood = 0;
var nrOfTags = 0;
var tweet =[];
var announcement = [];
//Mood variabel, en skala på humöret från 0-100
//där 0 är gravt deprimerad och 100 är maniskt lycklig!

var date = new Date();
var day = date.getDay() 
var hour = date.getHours()
var minutes = date.getMinutes()
var hashtag = [];




//Skapa tidssträng
if(minutes<10)
{
	var time = hour +':0'+ minutes
}
else
{
	var time = hour +':'+ minutes
}

mood = Math.random()*100;



if(mood>50){
	var path ='./happy.txt';
}
else if(mood<50){
	var path ='./sad.txt';
}

var tweetList = fs.readFileSync(path, "utf-8"); //Hämta hashtags
var tweetSplit = tweetList.split('\n');

nrOfTags = 1 + Math.floor(Math.random()*5)

//Loopar igenom hashtaglistan och lägger på ett gäng tags
for(i=0;i<nrOfTags;i++){
hashtag = hashtag + ' #' + hashtagSplit[Math.floor(Math.random()*hashtagSplit.length)].slice(0,-1);
}

if((Math.random()*5)<2){
	announcement = "Kaffet är klart! "
}


message = tweetSplit[Math.floor(Math.random()*tweetSplit.length)].slice(0,-1)


//Final Tweet
tweet = announcement + message + hashtag


console.log(tweet)
//Hashtag creator





