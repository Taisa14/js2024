// Приведение к Булю на примере Boolean(value);
// Запомнить правило!!! 6 ложных (falsy) значений приводящихся к false
//  в логическом преобразовании - это 0, null, undefined, 
//  пустая строка "", false. Абсолютно все остальное приводится к true

// console.log(Boolean(''));
// // будет false
// console.log(Boolean("snow"));
// Будет true




// Логическое И (оператр &&)
// Запинается на k;b
// возвращает то на чем запнулось или последний операнд

// console.log(5 && 6 && 'mango');
// ответ: ми получім mango потому что все true і оно запінается на последнем;

// console.log(0 && 1);

// відповідь : буде 0 тому що (правіло 6 ложних)нашло 0 і запнулось на нем.
// слева на право проверяет условіе




// Логіческое ИЛИ (оператор ||)
// Запинается на правде 
// Возвращает, то на чем  запнулось или последний операнд

// console.log(false || 7|| 8 || 10);

// Запнется на правде (т.е 7 , а false пропустит)





// Логическое НЕ (оператор !)
// Делает инверсию правда > ложь и ложь > правда

// console.log(!false)

// не !false это true инверсия

// приводит к булю и делает инверсию 

// console.log(!'5');
// будет false('5')- это true, а не true это будет false





