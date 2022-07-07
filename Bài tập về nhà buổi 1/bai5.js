/**
 * Bài 5
Cho array [1, 2, [ 7, 8, 9 ], 3, 4]
a, hãy lấy ra phần tử đầu và cuối của array array trên
b, hãy in ra phần tử đầu và phần tử cuối của array con bên trong
 */

var array = [1, 2, [ 7, 8, 9 ], 3, 4];

// a
console.log(array[0] , array[array.length - 1]);

// b
console.log(array[2][0] , array[2][array[2].length - 1]);