console.log('this is loaded')
require('dotenv').config()
exports.spotify={
id:process.env.SPOTIFY_ID,
secret:process.env.SPOTIFY_SECRET,

};
exports.omdb={
    omdb_key:process.env.OMDB_KEY

}