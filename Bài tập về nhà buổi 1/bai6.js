/**
 * Bài 6, 
cho array = [3,5,4,9,8,1,10]
a, hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
b, hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối 
// 3 + 20
 */

array = [3,5,4,9,8,1,10];

// a
tong = array[0] + array[array.length - 1];
console.log(tong);

// b
array[array.length] = 20;
tong = array[0] + array[array.length - 1];
console.log(tong);