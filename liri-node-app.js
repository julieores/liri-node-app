require("dotenv").config()
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});




var client = new Twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.twitter.access_token_key,
    access_token_secret: keys.twitter.access_token_secret
});





function searchTwitter(twitterhandle) {
    console.log("this is running!")
    if (!twitterhandle) {
        twitterhandle = ("bootcamp_test")
    }




    var params = {
        screen_name: twitterhandle
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
}

//searchTwitter("nodejs")

function searchSong(song) {
    if (!song) {
        song = "The Sign"

    }
    spotify.search({
        type: 'track',
        query: song
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
}
//searchSong()

function searchMovie(movie) {
    if (!movie) {
        movie = "Mr. Nobody"

    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var movieObj = JSON.parse(body)
            console.log(movieObj)

        }

    })

}
//searchMovie()

function userCommand(command, search){
switch(command){
    case "my-tweets":
    searchTwitter(search)
    break;

    case "spotify-this-song":
    searchSpotify(search)
    break;

    case "movie-search":
    searchMovie(search)
    break;

    default:
    console.log("please enter a value command")
    break;
}

}

userCommand(process.argv[2], process.argv[3])