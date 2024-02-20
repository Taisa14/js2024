
// Напиши функцию loginToFind(allLogins, login), для поиска логина
// если логина нет, вывести сообщение `Пользователь ${loginToFind} не найден
// Если нашли логин вывести сообщение {loginToFind} найден

// const logins = ['love', 'peace', 'world', 'Ukraine'];
// const loginToFind = 'world';


// const message = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден.`
// : `Пользователь ${loginToFind} не найден.`;

// console.log(message);




// Решение

// const logins = ['love', 'peace', 'world', 'Ukraine'];

// const findLogin = function (allLogins, loginToFind) {
  

//  for (const login of allLogins){
//     if (login === loginToFind){
//        return `Пользователь ${loginToFind} найден.`
       
//     }

//  }
//  return `Пользователь ${loginToFind} не найден`
// };

// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'peace'));
// console.log(findLogin(logins, 'apple'));
// console.log(findLogin(logins, 'world'));


// еще одно решение через тернарный метод


// const logins = ['love', 'peace', 'world', 'Ukraine'];
// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'avocado'));
// console.log(findLogin(logins, 'peace'));
// console.log(findLogin(logins, 'apple'));
// console.log(findLogin(logins, 'world'));