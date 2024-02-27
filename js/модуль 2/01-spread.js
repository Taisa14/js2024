// Операція spread (распиление) 
// - Array.prototype.concat() і аналог через spread;


// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [0, 3,...[1, 2, 3], 4, 5, 6, 7];
// console.log(numbers);



// Поіск самой маленькой аба великой температури (числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.min(... temps));

// const a = [{ x: 1 }, { y: 2 }, { z: 3}];
// const b = [...a] ;

// console.log( 'a: ', a);
// console.log('b: ',b);

// console.log(a[0] === b[0]);
// console.log(a ===b);

// a[0].x = 1000;
// console.log('a: ', a);
// console.log('b:', b);










// сшиваем несколько массивов в один через concat() и spreat

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

// Распыление обьектов
// - Object.prototype.assign() и StylePropertyMapReadOnly
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3};

// const c = Object.assign({}, a, b); //"это не по современному"
// console.log(c);


// современный вариант
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3};

// const c = { 
//     name: 'Mango',
//     ...a,
//     ...b,
// };


// console.log(c);

// const defaultSettings = {
//     theme: 'light',
//     showNotification : true,
//     hideSidebar: false,
// };

// const userSettings = {
//     showNotification : false,
//     hideSidebar: true,

// };

// const finalsettings = {
//     ...defaultSettings,
//     ...userSettings,
// };
// console.log(finalsettings);

// декларативный код(чистый)