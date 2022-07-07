/**
 * Bài 1 : 
Khai báo biến a ; b ; c lần lượt là  chiều cao , chiều rộng , chiều dài của một hình hộp chữ nhật . ( 
a ) Tính thể tích V của hình hộp chữ nhật trên (V=a*b*c )  
b ) Kiểm tra xem Hình hộp chữ nhật trên có phải la hình lập phương hay không . Nếu có thì tính thể tích của hình Lập phương trên  . 
c ) Tinh đường chéo D của hình hộp chữ nhật trên . 
 

d ) tính chu vi P của hình hộp chữ nhật  
e ) Tính diện tích xung quanh của hinh hộp chữ nhật trên  .  
f  ) Tính diện tích toàn phần của hình hộp chữ nhật  
console.log để in ra kết quả của 
 */

var a = 1;
var b = 2;
var c = 3;

// a
console.log(`Thể tích của hình hộp chữ nhật là : ${a*b*c}`);

// b
console.log(b == c && a == b ? `Đây là hình lập phương , thể tích = ${a**3}` : 'Đây không phải hình lập phương');

// sử dụng if else
if(b == c && a == b) {
    console.log('`Đây là hình lập phương , thể tích = ${a**3}`');
}else{
    console.log('Đây không phải hình lập phương');
}

// c
var duongCheo = (a**2 + b**2 + c**2)**(1/2);
console.log('Đường chèo của hình hộp chữ nhật là : ' + duongCheo);

// d
console.log(`Chu vi của hình hộp chữ nhật là : ${4*(a+b+c)}`);

// e
console.log(`Thể tích xung quanh của hình hộp chữ nhật là : ${2*a*(a+b)}`);

// f
console.log(`Thể tích toàn phần của hình hộp chữ nhật là : ${2*a*(a+b) + 2*a*b}`);
