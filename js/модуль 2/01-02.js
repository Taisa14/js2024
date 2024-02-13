// Напиши скрипт выбора стоимости отеля по количеству звезд. 
// 1- 20$, 2- 30$, 3- 50 $, 4- 70$, 5- 120$




// Если в переменной старс что-то кроме чисел 1-5 выведи строку 
// 'такого количества звезд нет'.



// const stars = 2;
// let price;

// if (stars === 1) {
//     price= 20;
// } else if (stars === 2){
//     price = 30;
// } else if (stars ===3) {
//     price === 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('такого количества звевзд нет')
// }

// тоже самое только структурированный код(ниже)

// const stars = 3;
// let price;

// switch(stars) {
//     case 1: 
//     price = 20;
//     break;

//     case 2:
//     price = 30;
//     break;

//     case 3:
//     price = 50;
//     break;

//     case 4:
//     price = 70;
//     break;

//     case 5:
//     price = 120;
//     break;

//     default:
//         console.log('такого количества звевзд нет')

// }
// console.log(price);





// Напиши скрипт выбора стоимости отеля по количеству звезд. 
// 1,2 - 20$, 3,4- 30$,  5- 120$

// const stars = 3;
// let price;

// if (stars === 1 || stars === 2) {
//     price= 20;
// } else if (stars === 3 || stars === 4){
//     price = 30;
// }  else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('такого количества звевзд нет')
// }
// console.log(price);


const stars = 5;
let price;

switch (stars) {
    case 1:
    case 2:
    price = 20;
    break;

    case 3:
    case 4:  
    price = 30;
    break;

    case 5:
    price = 120;
    break;

    default:
        console.log('такого количества звевзд нет')

}

console.log(price);

// Напиши скрипт выбора товара опции доставки товара
// опция хранится в переменной option: 1 - самовывоз, 2- курьер, 3- почта


// В переменную message записать сообщение в зависимости от опции.
// 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'.
// 'Курьер доставим заказ завтра с 09:00 до 18:00'
// Посылка будет отправлена сегодня
// Вам перезвонит менеджер


// 1.Сделать переменную  // в каждом кейсе записать месечстроку
// const option = 2;
// let message = '';

// // сделать свич 1 2 3
// switch(option) {
//     case 1:
//         message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//         break;
//     case 2:
//         message = 'Курьер доставим заказ завтра с 09:00 до 18:00';
//         break;
//     case 3 :
//         message = 'Посылка будет отправлена сегодня';
//         break;
//    default:
//         message = 'Вам перезвонит менеджер';
// }
// console.log(message)

// сделать лог месеч