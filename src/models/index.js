const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");

//1 de muchos a muchos
Genre.belongsToMany(Artist,{through:"genreArtist"})
Artist.belongsToMany(Genre,{through:"genreArtist"})

// 2 de uno a muchos 
Album.belongsTo(Artist)
Artist.hasMany(Album)

//3 de uno a muchos 
Song.belongsTo(Album)
Album.hasMany(Song)

//4 de muchos a muchos
Song.belongsToMany(Artist, {through:"songArtist"})
Artist.belongsToMany(Song, {through:"songArtist"})

//1 de muchos a muchos 
Song.belongsToMany(Genre, {through: "songGenre"})
Genre.belongsToMany(Song, {through: "songGenre"})