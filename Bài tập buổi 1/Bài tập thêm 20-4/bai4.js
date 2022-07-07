/**
 * Cho array sau : 
var arr004 = [3,5,7,8,9,[6,9,12],10,12];

a ) Truy vấn phần tử đầu và phần tử cuối của array con của arr004.
b ) Tính tổng phần tử đầu và cuối arr004 và array con . 
// 3 + 12 + 6 +12
c ) thêm 8 vào cuối arr004 rồi tính lại câu b .
 */

var arr004 = [3,5,7,8,9,[6,9,12],10,12];

// a
var arr4 = arr004[5];
console.log(arr4[arr4.length - 1]);

// b
console.log(arr004[0] + arr004[arr004.length - 1] + arr4[0] + arr4[arr4.length - 1]);

// c
arr004.push(8);
console.log(arr004);
console.log(arr004[0] + arr004[arr004.length - 1] + arr4[0] + arr4[arr4.length - 1]);
