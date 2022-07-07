/**
 * bài 2 : 
Khai báo biến pi = 3,14 
r là bán kính của hình cầu . 
d là đường kính của hình cầu  . 
a ) Tính diện tích của mặt cầu .
b ) Tính diện tích của của mặt cầu bằng đường kính d  
c ) Tính thể tích V của khối cầu
 */

var pi = 3.14;
var r = 2;
var d = 2*r;

// a
console.log(`Diện tích của mặt cầu là : ${4*pi*(r**2)}`);

// b
console.log(`Diện tích của mặt cầu là : ${pi*(d**2)}`);

// c
console.log(`Thể tích của khối cầu là : ${(4/3)(pi*(r**3))}`);
