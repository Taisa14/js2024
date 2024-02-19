// Напиши скрипт поиска логина 

// Если логина нет вывести сообщение 'Пользователь [логин] не найден.'
// Если нашли логин вывести сообщение 'Пользователь [логин] найден.'

// Сначала через for 
// потом через for ... Of.
// логика break
// метод includes() с тернарным оператором


const logins = ['love', 'peace', 'world', 'Ukraine'];
const loginToFind = 'world';
let message = '';

for (let i = 0; i < loginToFind.length; i += 1) {
    const login = logins[i];
    console.log('Login: ', login);

    if ( login === loginToFind) {
        message = `Пользователь ${loginToFind} найден`;
        break;
    }


        message = `Пользователь ${loginToFind} не найден`;

    
}

console.log(message);