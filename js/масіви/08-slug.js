// Делаем slug в URL из названия статьи (например dev.to)
// Заголовок статьи состоит только из букв и пробелов

// Нормализуем строку

// Разбиваем по словам

// Сшиваем в строку с разделителями

// Должно получиться top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');

// // console.log(words);

// const slug = words.join ('-');
// // console.log(slug);

// // цепочки вызова

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);