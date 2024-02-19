// 'Mango', 'Kiwi', 'Poly', 'Ajax'

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'] ;
// console.table(friends);

// console.log(friends[2]); 
// обращение к масиву


// friends[1] = 'love'
// friends[3] = 123
// console.table(friends);
// // изменение масива


// const lastIndex = friends.length -1;
// console.log(lastIndex);
// последний масив

// Передача по ссилке та по значенію

// Прімітіви та сложні тіпи 

// let a = 10;
// let b = a;


// console.log(a);
// console.log(b);

// ссылочный тип сравнения(сравнивается по адрессу) сложный тип

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b)

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);


// Ссылочное равенство (referential equality);

// Перебор (итерация) масива
// - for если  нужен индекс или нужно изменить элемент масива
// - for... of если индекс не нужен и в масиве ничего менять не нужно



// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// const lastIndex = friends.length -1;

// for(let i = 0; i <lastIndex; i +=1) {
//     console.log(friends[i]);
//     // переберется весь масив от нуля и до последнего индекса
//     // (friends[i]) - это обращение к каждому элементу массива на итерации
// }


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);
// const lastIndex = friends.length -1;

// for(let i = 0; i <=lastIndex; i += 1) {
//     friends[i] += '-1';
// }
// console.table(friends); 
// C помощью for можем изменять массив внутри



// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// for (const friend of friends) {
//     console.log(friend);
// }
// console.log(friends)
// перебрали масив с помощью for