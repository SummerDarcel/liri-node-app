require("dotenv").config();

//Add the code required to import the keys.js file and store it in a variable

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// var myObj = {
//     property: "value",
//     method: function(){
//         console.log("I'm a method");
//     }
// }
// switch case
//concert-this
//spotify-this-song
//movie-this
//do-what-it-says
