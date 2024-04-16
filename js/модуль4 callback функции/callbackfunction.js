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

// const buttonRef = document.quarySelector ('.js-button');


// отложенный вызов: геолокация

// window.navigator.geolocation.getCurrentPosition();


// Отложенный вызов : интервалы

// console.oog('В коде перед таймаутом');
//  console.log('Через 3 секунды внутри колбека в таймауте');
// console.log('в коде после таймаута');

