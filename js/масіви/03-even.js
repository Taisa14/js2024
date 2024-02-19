// Напиши скрипт которые подсчитает сумму
//  всех четных чисел в массиве.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// 1) переменная тотал
// 2) перебрать масив

// for (let i = 0; i < numbers.length; i += 1 ){
    // const number = numbers[i];
// console.log(number);



// 3)На каждой итерации проверить элемент на четность
// if(number % 2 === 0){
//     console.log('Четное число!!!');
// }
// 4) если четный плюсуем к тотал
// total += number;

// 2-й вариант

// for (const number of numbers) {
//     // console.log(number);


// if (number % 2 === 0){

//     console.log(`${number}  - четное!!!`);
    
//     total += number;
// }
// }

// console.log('Total: ', total);

// 3-й вариант 

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('Эту итерацию нужно пропустить', number);
//         continue;
//     }

//     console.log(`${number} - четное!!!`);
// }
  