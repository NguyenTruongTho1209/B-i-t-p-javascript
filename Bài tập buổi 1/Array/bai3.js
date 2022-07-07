/**
 * 
Bài 3 : 

Cho array sau : 
 var  Arr3=[1,3,5,7,[12,11,10],13,9]; 
a ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
sử dụng console.log in ra kết quả .
b) Truy vấn phần tử có ví trí ( vị trí index) là 4 có thứ tự là  2 .
Sử dụng console.log để in ra kết quả . 
c  ) Tính tổng tất cả các giá trị của phần tử có vị trí  là 4 . 
Sử dụng console.log để in ra kết quả . 
d ) tính Tổng phần tử đầu và phần tử cuối của Arr3 .
Sử dụng console.log để in ra kết quả
 */

var  Arr3=[1,3,5,7,[12,11,10],13,9]; 
// a
var b = Arr3[0];
Arr3[0] = Arr3[Arr3.length -1];
Arr3[Arr3.length -1] = b ;

console.log(Arr3);

// b
console.log(Arr3[4][1]);

// c
console.log(Arr3[4][0] + Arr3[4][1] + Arr3[4][2]);

// d
console.log(Arr3[0] + Arr3[Arr3.length - 1]);