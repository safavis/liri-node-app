
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios=require("axios")
var moment=require("moment")
var spotify = new Spotify(keys.spotify);

let [, , ...op]=process.argv
let track_name=op[1]
        let track_input=op.slice(2,op.length)

        track_input.forEach(element=>{
            track_name=track_name+(' '+element)
        })

switch(op[0])
{
    case('concert'):
        axios.get(`https://rest.bandsintown.com/artists/${op[1]}/events?app_id=codingbootcamp`)
        .then(r=>{console.log(`Name of the venue:${r.data[0].venue.name}`)
                console.log(`Venue Location:${r.data[0].venue.city},${r.data[0].venue.country}`)
                console.log(`Date:${moment(r.data[0].datetime.slice(0,10),'YYYY-MM-DD').format("MM/DD/YYYY")}`)
                console.log(`Time:${moment(r.data[0].datetime.slice(11,19),'HH:mm a').format("hh:mm a")}`)})
        .catch(e=>console.log(e))
    break;
    case('spotify'):
    spotify
  .request('https://api.spotify.com/v1/search?q=track:"'+track_name+'"&type=track')
  .then(function(data) {
    console.log(`The artist name: ${data.tracks.items[0].album.artists[0].name}`); 
    console.log(data.tracks.items[0].name); 

})
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
    // spotify.search({ type: 'artist', query: track_name }, function(err, data) {
    //     if (err) {
    //       return console.log('Error occurred: ' + err);
    //     }
       
    //   console.log(data); 
    //   });
    //     // spotify
        // .search({ type: 'artist', query: track_name})
        // .then(function(response) {
        //     console.log(response);
        // })
        // .catch(function(err) {
        // console.log(err); });
    break;
    case('movie'):
        let movied_name
        if(track_name===[])
           { movie_name='Mr. Nobody'}
        else
            {movie_name=track_name}
        axios.get(`http://www.omdbapi.com/?t=${movie_name}&apikey=${keys.omdb.omdb_key}`)
        .then(r=>{
            console.log(`Title of the movie:${r.data.Title}`)
            console.log(`Year the movie came out:${r.data.Year}`)
            console.log(`IMDB Rating of the movie:${r.data.Rated}`)
            console.log(`Rotten Tomatoes Rating of the movie:${r.data.Metascore}`)
            console.log(`Country where the movie was produced:${r.data.Country}`)
            console.log(`Language of the movie:${r.data.Language}`)
            console.log(`Plot of the movie:${r.data.Plot}`)
            console.log(`Actors in the movie:${r.data.Actors}`)})
        .catch(e=>console.log(e))
    break;
    case('do'):
            
    break;
}
