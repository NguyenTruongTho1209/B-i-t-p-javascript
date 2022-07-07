/**
 * Bài 3  khai báo biến r là bán kính của một hình tròn  .  
a ) Đường kính  d của hình tròn . 
b ) Tính diện tích hình tròn 
c ) tính chu vi của hinh tròn trên  .  
d ) tính chu vi của hình tròn bằng Đường kính d . 
 */

var r = 2;

// a
var d = 2*r;
console.log('Đường kính của hình tròn là : ' + d);

// b
var dienTich = 3.14* r**2;
console.log('Diện tích của hình tròn là :' + dienTich);

// c
var chuVi = 3.14*2*r;
console.log('Chu vi của hình tròn là : ' + chuVi);

// d
chuVi = 3.14*d;
console.log('Chu vi của hình tròn là : ' + chuVi);