let Library = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.Playlist = [];
}

Library.prototype.addPlaylist = function (listObject) {
    this.playlists.push.(listObject);
};

let Playlist = function (name) {
    this.name = name;

}

let Track = function (title, rating) {
    this.title = title;
    this.rating = rating;
}