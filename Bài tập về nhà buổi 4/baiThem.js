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

// a, thêm giá cho từng khách hàng
// hãy thêm totalPrice cho từng hành khách
for(var i = 0 ; i < khach.length ; i++){
    for(var j = 0; j < gia.length ; j++){
        if(khach[i].class == gia[j].class){
            khach[i].price = gia[j].price
        }
    }
}
console.log(khach);

// b, hành khách < 18 tuổi huongr giá trẻ em
for(var i = 0;i < khach.length ; i++){
    var discount = 0;
    if(khach[i].age < 18){
        if(khach[i].class == 'A'){
            discount = khach[i].price - (khach[i].price*0.5);
            khach[i].totalPrice = khach[i].price - discount;
        }else if(khach[i].class == 'B'){
            discount = khach[i].price - (khach[i].price*0.7)
            khach[i].totalPrice = khach[i].price - discount;
        }else if(khach[i].class == 'C'){
            discount = khach[i].price - (khach[i].price*1)
            khach[i].totalPrice = khach[i].price - discount;
        }
    }else{
        khach[i].totalPrice = khach[i].price
    }
}
console.log(khach);

