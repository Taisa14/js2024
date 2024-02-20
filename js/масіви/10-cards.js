// Работаем с коллекцием карточек в TransformStreamDefaultController
// Метод Splice();
// удалить 
// добавить
// обновить

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
console.table(cards);
// Удаление по индексу метод indexOf;

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// console.log(index);

// cards.splice(index, 1);
// console.log(cards);
// Добавление (по индексу)

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(1, 0, 5, 10, 20);

// console.table(cards);


// !!!!!обновление (по индексу)(замена);  (деструктивный метод)
// что мы хотим заменить(типо в карточке 1 удали элемент
//      и в нем поставь 3)

// const cardToUpdate = 'Карточка-4';
// cards.splice(3, 1, 3);
// console.table(cards);



// 2-й вариант

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');

// console.table(cards);
