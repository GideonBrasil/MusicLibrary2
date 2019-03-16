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

Playlist.prototype.overallRating = function () {
    let rating = 0;
    this.tracks.forEach(track => {
        rating += track.rating;
    });
    return rating / this.tracks.length;
}

Playlist.prototype.totalDuration = function () {
    let totalDuration = 0;
    this.tracks.forEach(track => {
        totalDuration += track.length;
    });
    return totalDuration / this.tracks.length;
};

let Track = function (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}