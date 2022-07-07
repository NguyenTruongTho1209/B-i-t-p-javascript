/**
 * Bài 2 : 
Cho Array sau : 
var arr2= [“Lâm”,”Hải”, “Huy”, “Anh”, “Duy”] ;
a ) sử dụng console.log in ra số lượng phần tử có trong Array
b ) Truy vấn phần tử đầu và phần tử cuối của Array trên và  sử dụng console.log in ra kết quả . 
c ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
sử dụng console.log in ra kết quả . 
d) Chỉnh sửa( ghi đè )  phần tử có  thứ tự là 4 thành “ Thái “ .   
sử dụng console.log in ra kết quả . 

 */

var arr2 = ['Lâm' , 'Hải' , 'Huy' , 'Anh' , 'Duy'];

// a
console.log(arr2.length);

// b
console.log(arr2[arr2.length - 1]);

// c
var a = arr2[0];
arr2[0] = arr2[arr2.length -1];
arr2[arr2.length -1] = a ;

console.log(arr2);

// d
arr2[4] = 'Thái';
console.log(arr2[4]);