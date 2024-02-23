// объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
// - Литерал объекта 
// - Свойства, ключи(имя) и значение
// - Как отличить объект от области видимости

// const playlist = {
//     name: 'Мой супер плейлист',
//     ratings: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };
// console.log(playlist);



// Пример литерал объекта

// const x = {};
// const fn = function (myObject) {
//     myObject = {a: 1, b: 2}
//     console.log(myObject);
// }

// fn({a: 1, b: 2 });

// Литерал возвращение в результате присваевается куда-то

// const rtfm = function () {
   
//     return {a: 5};
// }
// console.log(rtfm);


// const playlist = {
//     name: 'Мой супер плейлист',
//     ratings: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// playlist.qwe = 5;
// playlist.rating = 10;
// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);


// const propertyName = 'tracks';

// console.log(playlist['ratings']);
// console.log(playlist.ratings);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// Если нам нужно обратиться к свойству мы ставим точку и обращаемся

// к оъекту. console.log(playlist.tracks);
// объект это как словарь возможноть  сгрупировать характеристики какой-то одной сущности

// МАСИВЫ мы используем чтобы хранить что-то внем(коллекцию), 
// а обьекты чтобы групировать  характеристики како-то одной сущности.



// Доступ к свойству

// - Obj.key
// - obj['key']
// отсутствующие свойста

// Короткая запись свойства

// const username = 'Mango';
// const email = 'mango@gmail.com';

// const signupDate = {
//     username,
//     email,
// };

// console.log(signupDate);

// // Вычисляем свойства

{/* <input name = "color value = "tomato" > */}

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);



// Ссылочный тип {} === {}


// const a = { x: 1, y: 2};
// const b = a;
// a.hello = 100;


// console.log(b === a);
// console.log(a);
// console.log(b);

// Массивы и функции это объекты

// const a = [1, 2, 3];

// a.hello = ':)';
// console.log(a);


// const fn = function () {
//     console.log('hello');
// }

// fn.hello = ':)';
// console.log(fn.hello);