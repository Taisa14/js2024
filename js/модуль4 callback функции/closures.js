// Функция результатом своей работы может возвращать другую функцию.

// Возвращаемая функция во время вызова будет иметь доступ
// ко всем локальным переменным(области видимости)
// родительской функции (той из которой ее вернули),
// это называется 'замыкание'


// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     }

//     return innerFunction;
// };

// const fnB = fnA(333);

// fnB();

// console.log(fnB);

// Поваренок


// const makeSheff = function (name) {

//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// poly('чай');
// poly('омлет');

// Округлятор
// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));


// Приватные данные и функции - скрытие реализации, интерфейс

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарплата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 6000);
// console.log(salaryManager.current());
