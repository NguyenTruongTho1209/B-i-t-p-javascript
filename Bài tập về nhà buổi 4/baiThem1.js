var shop = [
	{id: 1, product: 'ao so mi', price: 200000, store: 100},
	{id: 2, product: 'ao khoac', price: 800000, store: 20},
	{id: 3, product: 'ao gio', price: 500000, store: 30},
	{id: 4, product: 'ao phong', price: 400000, store: 40},
]

var cart = [
	{user: 'huy', buy: [{id: 1, quantity: 2}, {id: 2, quantity: 1}]},
	{user: 'linh', buy: [{id: 1, quantity: 5}, {id: 3, quantity: 5}, {id: 2, quantity: 5}]},
	{user: 'hai', buy: [{id: 1, quantity: 10}, {id: 2, quantity: 5}, {id: 4, quantity: 5}]},
	{user: 'kien', buy: [{id: 1, quantity: 2}, {id: 2, quantity: 7}]},
]

//tính tiền cho từng user 
//a , tính tiền
//b , cập nhật lại kho hàng cuối ngày
for(var i = 0 ; i < cart.length ; i++){
    cart[i].price = 0
    for(var j = 0 ; j < cart[i].buy.length ; j++){
        for(var k = 0 ; k < shop.length ; k++)
        if(cart[i].buy[j].id == shop[k].id){
            cart[i].price = cart[i].price + cart[i].buy[j].quantity*shop[k].price
        }
    }
}
console.log(cart);

// b
for(var i = 0 ; i < cart.length;i++){
    for(var j = 0 ; j < cart[i].buy.length ; j++){
        for(var k = 0 ; k < shop.length ; k++){
            if(cart[i].buy[j].id == shop[k].id){
                shop[k].store = shop[k].store - cart[i].buy[j].quantity
            }
        }
    }
}
console.log(shop);

// function checkNumber (number){
//     var count = 0
//     for(var i = 0 ; i < number**(1/2); i++){
//         if(number%i == 0){
//             count++
//         }
//     }
//     if(count <= 2){
//         console.log(number + 'Là số nguyên tố');
//     }else{
//         console.log(number + 'không phải là số nguyên tố');
//     }
// }

// checkNumber(5)

// var n = 100;

// for(var i = 0 ; i < n ; i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }