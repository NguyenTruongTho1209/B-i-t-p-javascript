/**
 * Bài 9  .  var  Arr4 =[1,2,6,8,[1,11,12,4],12,14,[4,6,2]]; 
 a )  truy vấn đến phần tử ví trí thứ 4  và có thứ tự 3   . và phần tử có vị trí cuối cùng và có thứ tự là 2. (12 và 6 )  . Tính tổng của chúng  .  
b ) Hoán đổi phần tử đầu và cuối với nhau . 
c ) Sửa phần tử vị trí 2 thành array sau : [12,6,17].

d ) Sửa  phần tử ví trí thứ 4  và có thứ tự 3 thành array sau :  [1,3,8] và truy vấn đến số 8 của array vừa sửa 
 */

var arr4 =[1,2,6,8,[1,11,12,4],12,14,[4,6,2]];

// a
console.log(arr4[4][2] , arr4[arr4.length - 1][1]);

// b
var a = arr4[0];
arr4[0] = arr4[arr4.length - 1];
arr4[arr4.length - 1] = a;

console.log(arr4);

// c
arr4[2] = [12 , 6 , 17];
console.log(arr4);

// d
arr4[4][2] = [1 , 3 , 8];
console.log(arr4);
console.log(arr4[4][2][2]);

