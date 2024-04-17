// Функция обратного вызова (callback)
// Функция которая передается другой функции как аргумент
// называется функцией обратного отложенного вызова (callback-функция)
// Функция которая принимает другую функцию как параметр
// или возвращает функцию как результат своей работы называется функцией высшего порядка


// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);

// }

// const fnB = function (number) {
//     console.log('Этот Лог при вызову fnB', number);
// };

// fnA('Hello', fnB);





// Функция doMath (a, b, callback)

// const doMath = function (a, b, callback) {
//     const result = callback (a, b);

//     console.log(result);
// };

// const add = function (x, y) {
//     return x + y;

// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add); //5
// doMath(10, 8, sub); //2















// отложенный вызов: регистрация событий


// const buttonRef = document.querySelector('.js-button');

// buttonRef.addEventListener('click', function () {
//     console.log('клик');
// });





// отложенный вызов: геолокация

// ;
// const onGetPositionSuccess = function (position) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);

// };
// const onGetPositionError = function (error) {
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError
// )


// Отложенный вызов : интервалы

// const callback = function() {
//  console.log('Через 3 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');

// setTimeout(callback, 2000);
// console.log('в коде после таймаута');

// Отложенный вызов : http - запрос

// const onRequestSuccess = function (response) {
//     console.log(
//         'Вызов фуенкции onRequestSuccess после успешного ответа бекенда',
//     );

//     console.log(response);
// }

// fetch ('https://pokeapi.co/api/v2/pokemon')
// .then(res => res.json())
// .then(onRequestSuccess);







