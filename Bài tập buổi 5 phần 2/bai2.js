/**
 * // Bài 2:
// Cho array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
a) Xóa phần tử cuối cùng và in lại array
b)Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm 
c Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
d Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array
(ÁP dụng array.splice )

 */

var array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5]

// a
array2.pop()
console.log(16 , array2);

// b
array2.unshift(12);
console.log(array2);

// c
var deleteNumber = array2.splice(2 , 4)
console.log(array2);
// d
console.log(deleteNumber);



