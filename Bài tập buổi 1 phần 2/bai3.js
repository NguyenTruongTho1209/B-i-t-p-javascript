/**
 * Bài 3 : 

Cho array sau : var  Arr3=[1,3,6,8,[1,11,12,3],13,15,[4,3,2]]; 
a ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
sử dụng console.log in ra kết quả .
b) Truy vấn phần tử có ví trí ( vị trí index) là 4 có thứ tự là  2 .
và trị trí cuối cùng và có thứ tự là 2 . 
Sử dụng console.log để in ra kết quả . 
c  ) Tính tổng , hiệu ,tích tất cả các giá trị của phần tử có vị trí  là 4 và vị trí cuối của Arr3.
 */

var  arr3=[1,3,6,8,[1,11,12,3],13,15,[4,3,2]];

// b
console.log(arr3[4][1] , arr3[arr3.length - 1][1]);

// c
tongIndex4 = arr3[4][0] + arr3[4][1] + arr3[4][2] + arr3[4][3]
tongIndexCuoi = arr3[arr3.length - 1][0] + arr3[arr3.length - 1][1] +arr3[arr3.length - 1][2] 

console.log(`Tổng : ${tongIndex4 + tongIndexCuoi}
Hiệu : ${tongIndex4 - tongIndexCuoi}
Tích : ${tongIndex4 * tongIndexCuoi}`);

// a
var a = arr3[0];
arr3[0] = arr3[arr3.length - 1];
arr3[arr3.length - 1] = a;

console.log(arr3);


