/**
 * Bài 2 
khai báo a ; b ;c  là  số đo 3 cạnh của  tam giác  ABC ..  
a ) tính chu vi của tam giác   
b ) Kiểm tra xem ABC có phải tam giác đều không . 
console.log để in ra kết quả . 
c ) Trường hợp ABC là tam giác đều  . Tính diện tích của Tam giác ABC .

 */

var a = 2;
var b = 3;
var c = 4;

// a
chuVi = a + b + c;
console.log('Chu vi của tam giác ABC là : ' + chuVi);

// b

console.log(a == b && b == c ? 'Tam giác này là tam giác đều' : 'Tam giác này không phải tam giác đều');

// sử dụng if else
if(a == b && b == c){
    console.log('Tam giác ABC là tam giác đều');
}else{
    console.log('Tam giác ABC không phải tam giác đều');
}

// c . giả sử tam giác ABC đều có cạnh bằng d
var d = 4;

// áp dụng định lý pitago

var chieuCao = (d**2 + (d/2)**2)**(1/2);
var dienTich = (chieuCao*d)/2;

console.log('Diện tích của tam giác đều ABC là : ' + dienTich);


