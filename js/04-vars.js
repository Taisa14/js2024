// Свойства Строки, свойства length
const message = 'В этой строке 26 символов.';
console.log(message.length);

// Конкатенация строк(сшивание строк)сшивают только строки (числа не сшивают это особенность)

const firstName = 'Chelsy';
const lastName = 'Emerald';

console.log('Chelsy' + 'Emerald');

// Напиши скрипт который выведет строку в формате: гость х 
// у поселяется в k q значение переменных 


const room = 716;
const type = 'VIP';
const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
console.log(welcomeMsg);
// Гость Chelsy Emerald поселяется в VIP номер 716(Решение задачи)

// Шаблонные строки (template strings)
// возвращаемся к сщставлению строки поселения в отеле 

const quantity = 5;
const orderMsg = `вы заказываете ${quantity} холодильников.`;
console.log(orderMsg)

// Нормализация з методом toLowerCase() (нижний регистр все буквы маленькие)

// let brand = 'Samsung';
// brand = brand.toLowerCase();
// console.log(brand);




// Поиск в строке с методом includes()
const blacklistedWord1 = 'cпам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая распродажа этой недели, не пропустите'