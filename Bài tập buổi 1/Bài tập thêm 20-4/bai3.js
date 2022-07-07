/**
 * Bài 3 
Cho array sau : 
 var  arr03=[“Hoa”,12,[“Hùng”, 1,”Huy”,5],21,32,”Hải”]; 

a ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
sử dụng console.log in ra kết quả .
b) Truy vấn phần tử có ví trí ( vị trí index) là 2 có thứ tự là  2 .
Sử dụng console.log để in ra kết quả . 
c ) in ra vị trí index của phần tử có giá trị là  32 . 
d ) in ra số lượng phần tử của array trên
 */

var arr3 = ['Hoa' , 12 , ['Hùng' , 1 , 'Huy' ,5] , 21 , 32 , 'Hải'];

// a
var c = arr3[0];
arr3[0] = arr3[arr3.length - 1];
arr3[arr3.length - 1] = c;

console.log(arr3);

// b
console.log(arr3[2][1]);

// c
console.log(arr3.indexOf(32));

// d
console.log(arr3.length);