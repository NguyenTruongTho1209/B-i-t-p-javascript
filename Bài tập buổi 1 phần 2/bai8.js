/**
 * 
 Bài 8   cho arr02  = [6,6,8,7,12 , [6,8,7,4,3,5] , 2]
a ) Truy vấn phần tử đầu và cuối của arr02 và array con của arr02( vị trí index arr02.length-2) , 
sau đó tính tổng của chúng  .  
// 6+2 + 6+5
b ) thêm 5 vào array con của arr02 , rồi tính lại câu a . 
c ) thêm 9 vào arr02 , thêm 12  vào array con của arr02 , và tính câu a

 */

var arr02  = [6,6,8,7,12 , [6,8,7,4,3,5] , 2];

// a
var tong = arr02[0] + arr02[arr02.length - 1] + arr02[arr02.length - 2][0] 
+ arr02[arr02.length - 2][arr02[arr02.length - 2].length - 1];

console.log(`Phần tử đầu của mảng là : ${arr02[0]}
Phần tử cuối của mảng là : ${arr02[arr02.length - 1]}
Phần tử đầu của mảng con là : ${arr02[arr02.length - 2][0]}
Phần tử cuối của mảng con là : ${arr02[arr02.length - 2][arr02[arr02.length - 2].length - 1]}
Tổng của chúng là ${tong}`);

// b
arr02[arr02.length - 2][arr02[arr02.length - 2].length] = 5;
console.log(tong);

// c
arr02[arr02.length] = 9;
arr02[arr02.length - 2][arr02[arr02.length - 2].length] = 12;

var tongMoi = arr02[0] + arr02[arr02.length - 1] + arr02[arr02.length - 3][0] 
+ arr02[arr02.length - 3][arr02[arr02.length - 3].length - 1];

console.log(35 , tongMoi);