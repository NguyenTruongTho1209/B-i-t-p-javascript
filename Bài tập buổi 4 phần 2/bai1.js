/**
 * Bài 1 : 
var shop = [
	{id: 1, product:'Dày da  ', price: 259000, store: 100},
	{id: 2, product: 'Dép lào', price: 129000, store: 230},
	{id: 3, product: 'Dày cao gót', price: 749000, store: 130},
	{id: 4, product: 'Dép tông', price: 499000, store: 240},
] 
( price là giá ; store : số lượng còn lại ) 
a ) Viết function tìm kiếm sản phẩm theo tên  . Nếu không tìm thấy thì thì in ra “Không tìm thấy “ 
b ) Viết function tính tổng số sản phẩm có trong shop.
c ) Viết functinon tính tiền sản phẩm và cập nhật số lượng sản phẩm còn lại trong shop . 

đầu vào là chuỗi string tên sản phẩm , và số lượng mua . 
Nếu số sản phẩm còn lại trong shop  =< 0 thì in ra “ Shop đã hết của bạn cần mua “
 */

var shop = [
	{id: 1, product:'Dày da', price: 259000, store: 100},
	{id: 2, product: 'Dép lào', price: 129000, store: 230},
	{id: 3, product: 'Dày cao gót', price: 749000, store: 130},
	{id: 4, product: 'Dép tông', price: 499000, store: 240},
] 

// a
function searchName (Name , input){
    var string = []
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].product === Name){
            string[string.length] = input[i]
        }
    }
    return string.length > 0 ? string : 'Không tìm thấy '
}
console.log(searchName('day',shop));

// b
function sumSanPham (input){
    var tong = 0;
    for(var i = 0 ; i < input.length ; i++){
        tong = tong + input[i].store
    }
    return tong;
}
console.log(sumSanPham(shop));

// c
// var user = {user: 'Thọ', buy: [{id: 1, quantity: 2}, {id: 2, quantity: 1}]}
function bill(input , name , soLuong){
    var sumBill = 0
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].product === name){
            sumBill = soLuong*input[i].price
            input[i].store -= soLuong
            console.log('Giá của đơn hàng là : ' + sumBill);
            if(input[i].store <= 0){
                console.log('Sản phẩm đã hết hàng');
            }else{
                console.log('Sản phẩm còn lại là : ' + input[i].store);
            }
        }
    }
}
bill(shop , 'Dày da' , 100)