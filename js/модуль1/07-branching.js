// Оператор ветления if 
// if(5){
// console.log('sdbsbs')
// }
// Еслі там где if пріводіться к true значіт тело виполнітся еслі к false(0) то не виполніться

// Оператор ветленія if...else

// if(50 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }

// оператор ветленія else if

// const salary = 1000;
// if (salary <= 500) {
//     console.log('Уровень 1');
// }else if (salary > 500 && salary <= 1500) {
//     console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//     console.log('Уровень 3');
// } else{
//     console.log('Уровень 4')
// }


// тернарний оператор

const balance = 1000;
// let message;
// if(balance >= 0) {
//     message = 'Позітивний баланс';
// }else {
//     message = 'Негативний баланс';
// }

const message = balance  >= 0 ? 'Позітивний баланс' : 'Негативний баланс';

console.log(message);


// Блочная область відимості змінніх

if (true) {
    const a = 5;
    console.log(a);
}
