let Library = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

Library.prototype.addPlaylist = function (playlistObject) {
    this.playlists.push(playlistObject);
};

let Playlist = function (name) {
    this.name = name;
    this.tracks = [];
}

Playlist.prototype.addTrack = function (trackObject) {
    this.tracks.push(trackObject);
};

let Track = function (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}