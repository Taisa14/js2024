// Работа с коллекцией (массивом объектов)

// const friends = [
//     {name: 'Mango', online: false },
//     {name: 'Kiwi', online: true },
//     {name: 'Poly', online: true },
//     {name: 'Love', online: false}
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friends);

//     friend.newprop = 333;
// }

// console.table(friends);

// Задание1

// const friends = [
//     {name: 'Mango', online: false },
//     {name: 'Kiwi', online: true },
//     {name: 'Poly', online: true },
//     {name: 'Love', online: false}
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friends);
// }


// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === friendName) {
//             return 'Нашли!!!';
//         }
//     }
// return 'НЕ НАШЛИ :(' ;

// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Ищем друга по имени

// const friends = [
//     {name: 'Mango', online: false },
//     {name: 'Kiwi', online: true },
//     {name: 'Poly', online: true },
//     {name: 'Love', online: false}
// ];
// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//         for (const friend of allFriends) {
//             console.log(friend);
//             console.log(friend.name);
    
//             if (friend.name === friendName) {
//                 return 'Нашли!!!';
//             }
//         }
//     return 'НЕ НАШЛИ :(' ;
    
//     };

// const names = [];
// const getAllNames = function (allFriends) {

//     for (const friend of allFriends){

//     console.log(friend.name);
//      names.push(friend.name);

//     }
//   console.log(names);
//   return names;

// }
// console.log(getAllNames(friends));

// Получаем имена только друзей которые онлайн

// const getOnlineFriends = function (allFriends) {

//     const onlineFriends = [];
//     for( const friend of allFriends) {
//         console.log(friend);

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }
//     return onlineFriends;
// };


    // console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {

//     const offlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend.online);

//         if(!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }

//     return offlineFriends;
// };


// console.log(getOfflineFriends(friends));