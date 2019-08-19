require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var moment = require('moment');

//Add the code required to import the keys.js file and store it in a variable

var Spotify = require("node-spotify-api");
var spotifyKeys = keys.spotify;
var spotifyID = spotifyKeys.id;
var spotifySecret = spotifyKeys.secret;
var spotify = new Spotify({
    id: spotifyID,
    secret: spotifySecret
});

var axios = require("axios");
var bandsintown = keys.bandsInTown;
var bandsInTownID = bandsintown.id;

var OMDB = require("omdb-client");
var omdbKeys = keys.omdb;
var omdbAPIKEY = omdbKeys.key;








//concert-this
//spotify-this-song
//movie-this
//do-what-it-says
