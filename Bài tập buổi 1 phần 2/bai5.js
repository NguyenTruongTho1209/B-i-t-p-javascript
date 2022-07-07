/**
 * Bài 5  : 

Cho array sau : 
var arr004 = [1,13,5,7,8,9,[6,9,12,5],10,[12,21,3],24];

a ) Truy vấn phần tử đầu và phần tử cuối của array con thứ 1 ( vị trí  6 )   
array con thứ 2 ( vị trí  length-2 )và của arr004.

b ) Tính tổng phần tử đầu và cuối arr004 và array con thứ 1 và 2  . 
// 3 
c ) thêm 2, vào cuối arr004 rồi tính lại câu b .
 */

var arr004 = [1,13,5,7,8,9,[6,9,12,5],10,[12,21,3],24];

// a
console.log(arr004[6][0] , arr004[6][arr004[6].length - 1] , arr004[arr004.length - 2][0] , arr004[arr004.length - 2][arr004[arr004.length - 2].length - 1]);

// b
console.log(arr004);

console.log(arr004[0] + arr004[arr004.length - 1] 
    + arr004[6][0] + arr004[6][arr004[6].length - 1] 
    + arr004[arr004.length - 2][0] + arr004[arr004.length - 2][arr004[arr004.length - 2].length - 1]);
// c
arr004[arr004.length] = 2;
console.log(arr004);
console.log(arr004[0] + arr004[arr004.length - 1] 
    + arr004[6][0] + arr004[6][arr004[6].length - 1] 
    + arr004[arr004.length - 3][0] + arr004[arr004.length - 3][arr004[arr004.length - 3].length - 1]);