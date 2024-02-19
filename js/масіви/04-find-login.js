// Напиши скрипт поиска логина 

// Если логина нет вывести сообщение 'Пользователь [логин] не найден.'
// Если нашли логин вывести сообщение 'Пользователь [логин] найден.'

// Сначала через for 
// потом через for ... Of.
// логика break
// метод includes() с тернарным оператором


// const logins = ['love', 'peace', 'world', 'Ukraine'];
// const loginToFind = 'world';
// let message = '';

// for (let i = 0; i < loginToFind.length; i += 1) {
//     const login = logins[i];
//     console.log('Login: ', login);

//     if ( login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }


//         message = `Пользователь ${loginToFind} не найден`;

    
// }

// console.log(message);


// // с методом includes( используем в случае когда нужно 
// проверить есть ли там такое или нет)
// const logins = ['love', 'peace', 'world', 'Ukraine'];
// const loginToFind = 'world';
// let message = '';

// console.log(logins.includes(loginToFind));


// можно декларативным кодом через тернарный оператор

// самое лучшее решение вот это

// const logins = ['love', 'peace', 'world', 'Ukraine'];
// const loginToFind = 'world';


// const message = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден.`
// : `Пользователь ${loginToFind} не найден.`;

// console.log(message);
