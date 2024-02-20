
// Напиши функцию slugify(string) которая получает строку и возвращает Url-slug
// Строка состоит  только из букв и пробелов



// Первый вариант !!!


// const slugify = function (string) {
   
//     const normalizedTitle = string.toLowerCase();
//     const words = normalizedTitle.split(' ');
//     const slug = words.join ('-');
    
//     return slug;
// }

// console.log(slugify(`Top 10 benefits of React framework`));
// console.log(slugify(`Hello, my beautiful world`));
// console.log(slugify(`I want to see sea`));


// 2-й вариант !!!

// const slugify = function (string) {
//     return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify(`Top 10 benefits of React framework`));
// console.log(slugify(`Hello, my beautiful world`));
// console.log(slugify(`I want to see sea`));