// Деструктуризация объекта
// Значения по умолчанию
// Имя переменной от имени свойств


// const playlist = {
//     names: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,

// };


// const { rating, tracks, names, trackCount } = playlist;


// console.log( names, rating, tracks, trackCount
// )


// Глубокая деструктуризация

// const profile = {
//     names: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views : 4827,
//         likes: 1308,
//     },
// };


// const{names, tag, location, avatar, stats} = profile;

// const {followers, views, likes} = stats;

// console.log(names, tag, location, avatar, followers, views, likes);


// Вариант номер два аналогичный только
//  оформлен через глубокую деструктуризацию


// const profile = {
//     names: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views : 4827,
//         likes: 1308,
//     },
// };


// const{
//     names, 
//     tag, 
//     location, 
//     avatar, 
//     stats: {followers, views, likes}} = profile;

// console.log(names, tag, location, avatar, followers, views, likes);


// Деструктуризация массивов

// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,

// };

// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));





// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,

// };

// const keys = Object.keys(authors);

// for (const key of keys) {
//     console.log(key)
//     console.log(authors[key]);
// }



// Object.entries - Возвращает массив масивов!!!!

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,

// };

// const entries = Object.entries(authors);
// // console.log(entries);

// for (const entry of entries) {
//     const [name, rating] = entry;
//     console.log(name, rating);
    
// }


// второй вариант

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,

// };

// const entries = Object.entries(authors);
// // console.log(entries);

// for (const [name, rating] of entries) {
    
//     console.log(name, rating);
    
// }




// Операция rest (сбор)


// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views : 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, ...restProps } = profile;


// console.log(name, tag, location);
// console.log(restProps);




// Патерн " Объект настроек"
// Деструктуризация параметра- объекта в подниси функции
// rest при деструктуризации в подписи

// const ShowProfileInfo = function ({

//  name, 
//  tag, 
//  location, 
//  avatar, 
//  stats: { followers, views, likes},
// }) {

//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// const profile = {
//         name: 'Jacques Gluke',
//         tag: 'jgluke',
//         location: 'Ocho Rios, Jamaica',
//         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//         stats: {
//             followers: 5603,
//             views : 4827,
//             likes: 1308,
//         },
//     };

// ShowProfileInfo(profile);