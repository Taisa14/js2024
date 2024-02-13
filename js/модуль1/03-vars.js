// Парс числа  з Number.parse.Int та Number.parseFloat()
// Парсіт саме ціле число(з ліва на право парсіт(Якщо буде 50.25 px(Воно віведе циле чісло 50)))
// let elementWidth = '50';
// const result = Number.parseInt(elementWidth);
// elementWidth= Number(elementWidth);
// // console.log(result);
// // elementWidth = ;
// console.log('elementWidth: ', elementWidth)

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight : ', elementHeight);

// методи чісла .toFixed(digits)
// Матрешки на прикладі console.log(Number(чісло.toFixed(digits)))

// let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);

// console.log(salary); 
// ответ 1300.16


// Приведення (переобразованіе) к числу с Number(value)
// Значення NaN (Not a Number) та метод Number.isNaN(value)
// let  quantity = '30';
// let value = 'Цю строку неможливо привесті к числу';
// console.log(Number('true'));
// Буде NaN(не чісло.)



// Обїект Math

// Возведення в степень
// Exponent operator
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// чісло 2 возвесті в степінь 5
// console.log(result);


// а можно зробіті так 2 в 5 степені - console.log(2 ** 5);буде 32

// а квадратний корінь - Math.sqrt();







// Напиши скрипт который просит пользователя ввести число и степень,
//  возводит число в эту степень и выводит результат в консоль.
// шаг 1 попросить ввести число и сохранить в переменную

// let base = prompt ('Давай число');
// base = Number(base);
// console.log(base)
// // шаг 2 попросить ввести степень и сохранить в переменную
// let power = prompt ('Давай степень');
// power = Number(power);
// console.log(power);
// // шаг 3 возвести введенные данные и вывести
// const result = base ** power;
// console.log(result);




// генерим псевдослучайные числа

// const max = 80;
// const min = 10;

// console.log(Math.random() * (max - min)+ min);


// Метод Math.round (приводит к целому числу.округляет(допустим 1.4(будет 1)а 1,6 - покажет 2))
// const max = 80;
// const min = 10;

// console.log(Math.round(1.2));


// и с рондомным числом и с округлением

// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);


// Делаем рандомный выбор цвета
// const colors = ['tomato', 'teal', 'orange', 'skyblue'];
// const max = colors.length -1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;