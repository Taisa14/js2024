// Функция результатом своей работы может возвращать другую функцию.

// Возвращаемая функция во время вызова будет иметь доступ
// ко всем локальным переменным(области видимости)
// родительской функции (той из которой ее вернули),
// это называется 'замыкание'


// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     }

//     return innerFunction;
// };

// const fnB = fnA(333);

// fnB();

// console.log(fnB);

// Поваренок


const makeSheff = function (name) {

    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`);
    };
    return makeDish;
};

const mango = makeSheff('Mango');

mango('котлеты');
mango('пирожок');

const poly = makeSheff('Poly');

poly('чай');
poly('омлет');

