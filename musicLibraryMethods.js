let Library = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
};

Library.prototype.addPlaylist = function (playlistObject) {
    this.playlists.push(playlistObject);
};

let Playlist = function (name) {
    this.name = name;
    this.tracks = [];
};

Playlist.prototype.addTrack = function (trackObject) {
    this.tracks.push(trackObject);
};

Playlist.prototype.overallRating = function () {
    let rating = 0;
    this.tracks.forEach(track => {
        rating += track.rating;
    });
    return rating / this.tracks.length;
};

Playlist.prototype.totalDuration = function () {
    let totalDuration = 0;
    this.tracks.forEach(track => {
        totalDuration += track.length;
    });
    return totalDuration;
};

let Track = function (title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
};

const musicLib = new Library("GideonLib", "Gideon");
console.log("musicLib:", musicLib);
const trivium = new Playlist("Trivium Ascendancy");
console.log("trivium:", trivium);
const dt = new Playlist("Octivarium");
console.log("dt:", dt);
musicLib.addPlaylist(trivium);
musicLib.addPlaylist(dt);
console.log("musicLib with playlists:", musicLib);
const trTrack1 = new Track('The End of Everything', 4.2, 1.2)
const trTrack2 = new Track('Rain', 3, 4.11)
const trTrack3 = new Track('Pull Harder on the Strings of Your Martyr', 5, 4.51)
trivium.addTrack(trTrack1);
trivium.addTrack(trTrack2);
trivium.addTrack(trTrack3);
console.log('tracks in Trivium playlist: ', trivium);
const dtTrack1 = new Track('The Root of All Evil', 3.6, 8.7)
const dtTrack2 = new Track('The Answer Lies Within', 5, 5.26)
const dtTrack3 = new Track('I Walk Beside You', 5, 4.29)
dt.addTrack(dtTrack1);
dt.addTrack(dtTrack2);
dt.addTrack(dtTrack3);
console.log('tracks in Dream Theater playlist: ', dt);

console.log('Total duration of Trivium Ascendancy playlist is ', Math.round(trivium.totalDuration() * 100) / 100, 'minutes');
console.log('The rating for Trivium Ascendancy is ', Math.round(trivium.overallRating() * 100) / 100);