// bai 2
var shop = [
  { id: 1, product: "ao so mi", price: 200000, store: 100 },
  { id: 2, product: "ao khoac", price: 800000, store: 20 },
  { id: 3, product: "ao gio", price: 500000, store: 30 },
  { id: 4, product: "ao phong", price: 400000, store: 40 },
];

var cart = [
  {
    user: "huy",
    buy: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 1 },
    ],
  },
  {
    user: "linh",
    buy: [
      { id: 1, quantity: 5 },
      { id: 3, quantity: 5 },
      { id: 2, quantity: 5 },
    ],
  },
  {
    user: "hai",
    buy: [
      { id: 1, quantity: 10 },
      { id: 2, quantity: 5 },
      { id: 4, quantity: 5 },
    ],
  },
  {
    user: "kien",
    buy: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 7 },
    ],
  },
];

// tính tiền cho từng user ( thêm totalPrice )
// a tính tiền
// b cập nhật lại kho hàng cuối ngày xem tồn kho còn bao nhiêu
// c viết function mua hàng có đầu vào là object dạng
// {user: 'huy', buy: [{id: 1, quantity: 2}, {id: 2, quantity: 1}]},

// nếu hàng trong kho đủ để đáp ứng thì tính tiền như ý a
// nếu hàng không đủ để bán thì trả ra thiếu những hàng nào, thiếu bao nhiêu

// a

//   for(var i = 0 ; i < cart.length ; i++){
//     cart[i].totalPrice = 0
//     for(var j = 0 ; j < cart[i].buy.length ; j++){
//         for(var k = 0 ; k < shop.length ; k++)
//         if(cart[i].buy[j].id == shop[k].id){
//             cart[i].totalPrice = cart[i].totalPrice + cart[i].buy[j].quantity*shop[k].price
//         }
//     }
// }
// console.log(cart);

// // b
// for(var i = 0 ; i < cart.length;i++){
//     for(var j = 0 ; j < cart[i].buy.length ; j++){
//         for(var k = 0 ; k < shop.length ; k++){
//             if(cart[i].buy[j].id == shop[k].id){
//                 shop[k].store = shop[k].store - cart[i].buy[j].quantity
//             }
//         }
//     }
// }
// console.log(shop);
cart[cart.length] = {
  user: "tho",
  buy: [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 7 },
  ],
};
// c
function Purchase(input, input2) {
//   for (var i = 0; i < input.length; i++) {
//     for (var j = 0; j < input[i].buy.length; j++) {
//       input[i].buy[j].soLuong = 0;
//       for (var k = 0; k < input2.length; k++) {
//         if (input[i].buy[j].id == input2[k].id) {
//           input[i].buy[j].soLuong = input[i].buy[j].quantity;
//         }
//       }
//     }
//   }

  for (var i = 0; i < input.length; i++) {
    input[i].totalPrice = 0;
    for (var j = 0; j < input[i].buy.length; j++) {
      for (var k = 0; k < input2.length; k++) {
        input[i].buy[j].soLuong = 0;
        if (input[i].buy[j].id == input2[k].id) {
            input[i].buy[j].soLuong = input[i].buy[j].quantity;
          if (input[i].buy[j].soLuong > input2[k].store) {
            input[i].totalPrice = `Sản phẩm : ${input2[k].product} hiện tại đang hết hàng`;
          } else {
            input[i].totalPrice = input[i].totalPrice + cart[i].buy[j].quantity * shop[k].price;
          }
          shop[k].store = shop[k].store - cart[i].buy[j].quantity;
        }
      }
    }
  }
  console.log(input);
  return input2;
}
console.log(Purchase(cart, shop));
