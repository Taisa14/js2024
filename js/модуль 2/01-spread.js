// Операція spread (распиление) 
// - Array.prototype.concat() і аналог через spread;

[].concat()

Поіск самой маленькой аба великой температури (числа)

const temps = [18, 14, 12, 21, 17, 29, 24];

сшиваем несколько массивов в один через concat() и spreat

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];

cpnsole.log(allTemps);

Распыление обьектов
- Object.prototype.assign() и StylePropertyMapReadOnly
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3};