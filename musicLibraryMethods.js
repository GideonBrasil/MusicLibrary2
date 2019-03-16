let Library = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

Library.prototype.addPlaylist = function (listObject) {
    this.playlists.push(listObject);
};

let Playlist = function (name) {
    this.name = name;
    this.tracks = [];
}

Playlist.prototype.overallRating

let Track = function (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}