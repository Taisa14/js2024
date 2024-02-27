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
    getItems() {
        return this.items;
    },
    add(product) {
        this.items.push(product);
    },
    remove(productName) {
        const { items } = this;

for (let i = 0; i < items.length; i+= 1) {

    const { name } = items[i];

   if (productName === name) {
    console.log('нашли такой продукт', productName);
    console.log('индекс: ', i);

    items.splice(i, 1)
}
}


        
    },
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({name: 'apple', price: 50});
cart.add({name: 'strawberry', price: 70});
cart.add({name: 'limon', price: 60});
cart.add({name: 'tomato', price: 110});

console.table(cart.getItems());

cart.remove ('limon');
console.table(cart.getItems());
