// Bài 1
var khach = [
  {username: 'huy', age: 15, class: 'A'},
  {username: 'vinh', age: 20, class: 'B'},
  {username: 'nam', age: 16, class: 'C'},
  {username: 'tien', age: 25, class: 'C'},
  {username: 'binh', age: 30, class: 'A'},
  {username: 'kien', age: 17, class: 'B'}
]
 
var gia = [
  {class: 'A', price: 1000000, child: 0.5},
  {class: 'B', price: 800000, child: 0.7},
  {class: 'C', price: 500000, child: 1}
]
 
// a, thêm giá cho từng khách
// hãy thêm totalPrice cho từng hành khách
 
// b
// hành khách < 18 tuổi huongr giá trẻ em
// hãy cập 
 
// nhật lại giá tiền lại cho user

// a
for(var i = 0 ; i < khach.length ; i++){
    for(var j = 0 ; j < gia.length ; j++){
        if(khach[i].class == gia[j].class){
            khach[i].totalPrice = gia[j].price
        }
    }
}
console.log(khach);
// b
for(var i = 0 ; i < khach.length ; i++){
    var discount = 0;
    for(var j = 0 ; j < gia.length ; j++){
        if(khach[i].class == gia[j].class && khach[i].age < 18){
            discount =gia[j].price - gia[j].price*gia[j].child;
            khach[i].totalPrice = khach[i].totalPrice - discount;
        }
    }
}
console.log(khach);