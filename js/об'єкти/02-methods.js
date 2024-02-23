// Методы объекта и this при обращение к свойствам в методах

// - changeName
// - addTrack
// - updateRating
// - getTrackCount

// const playlist = {
//     name: 'Мой супер плейлист',
//     ratings: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     getName: function(){
//         console.log ('Ага это getName :) ')
//     }
// };


// console.log(playlist);
// playlist.getName(5);


// const playlist = {
//     name: 'Мой супер плейлист',
//     ratings: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//    changeName(newName) {
//     console.log('this внутри changeName: ', this);

//     this.name = newName;

//    },

//    addTrack(track) {

//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;

//    },

//    updateRatings(newRatings) {
// this.ratings = newRatings 
//    },
//    getTrackCount() {
//     return this.tracks.length;
//    }, 


// };

// console.log(playlist.getTrackCount());
// playlist.changeName('Новое имя');
// playlist.addTrack('новый трек');
// playlist.updateRatings(4);
// console.log(playlist);

