/**
 * Bài 7, cho array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
a, tính tổng của phần tử đầu và phần tử cuối trong array2 và array con 
// 1 + 3 + 6 +5
b, hãy thêm số 10 vào cuối array con và tính lại tổng trên
 */

array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3];

// a
var tong = array2[0] + array2[array2.length - 1] + array2[5][0] + array2[5][array2[5].length - 1];
console.log(tong);

// b
array2[array2.length] = 10;
var tong = array2[0] + array2[array2.length - 1] + array2[5][0] + array2[5][array2[5].length - 1];
console.log(tong);