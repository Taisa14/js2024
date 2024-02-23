// Работаем с коллекцией товаров в корзине:

// -getItems();
// -add(product);
// -remove(product);
// -clear();
// countTotalPrice();
// increaseQuantity(productName)
// decreaseQuantity(productName)

// { name: 'apple', price: 50 }
// { name: 'strawberry', price: 70 }
// { name: 'limon', price: 60 }
// { name: 'tomato', price: 110 }


const cart = {
    items: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({name: 'apple', price: 50});
cart.add({name: 'strawberry', price: 70});
cart.add({name: 'limon', price: 60});
cart.add({name: 'tomato', price: 110});

console.table(cart.getItems());