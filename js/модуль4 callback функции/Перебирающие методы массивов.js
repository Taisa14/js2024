// foreach.js

// Array.prototype.forEach((currentValue, index, array), thisArg);
// - Поэлементно перебирает оригинальный масив 
// - ничего не возвращает
// -заменяет классический for, если не нужно прерывать цикл


// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function(number, index,array) {
//     console.log('number', number);
    
// });

// console.log(numbers);




// 02- map


// Array.prototype.map()
// - Поэлементно перебирает оригинальный массив
// - Не изменяет оригинальный массив
// - Возвращает новый массив такойже длины

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(number => {
console.log(number);
return number * 3;
});
// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true},
];

// Получаем массив имен всех игроков

const playerNames = players.map(player => player.name)
    console.log('playerNames', playerNames);



const playerIds = players.map(player => player.id)
console.log('playerIds', playerIds);

// const res = players.map(player => {
//     return{
//         name: player.name,
//         online: player.online,

//     };
// });
// console.log('res', res);

// тоже самое проще в одну строку 



const res = players.map(({name, online}) => ({name, online}));
    
console.log('res', res);