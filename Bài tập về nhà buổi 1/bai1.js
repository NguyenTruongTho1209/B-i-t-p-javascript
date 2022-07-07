/**
 * Bài 1.
cho array = [1,6,8,7,6,9]
a, array trên có bao nhiêu phần tử
b, hãy in ra phần tử đầu tiên và phần tử cuối cùng trong array
c, hãy thêm số 5 vào cuối array
d, hãy thay đổi giá trị của phần tử đầu tiên và cuối cùng trong array thành số 10
 */

var array = [1,6,8,7,6,9];

// a
console.log(`Số phần tử trong array là : ${array.length}`);

// b
console.log(
    `Phần tử đầu tiên là: ${array[0]}
    Phần tử cuối cùng là: ${array[array.length - 1]}`);

// c

array[array.length] = 1;
array[array.length] = 2;
array[array.length] = 3;
array[array.length] = 4;
array[array.length] = 5;
console.log(array);

// d
array[0] = 10 ;
array[array.length - 1] = 10;
console.log(array);