/**
 * Bài 1:

var data = [1,1,3,4,4,5,6,7,9]

a ) Thêm số 8 vào cuối array data .
b ) Thêm số 10 vào cuối array data
c ) Thêm số 5 vào đầu  array data .
d ) Đổi phần tử có vị trí là 5 thành số  11 .
e ) Xóa phần tử vị trí  thứ 4 và thêm 2 số 5 và 7 vào data .
 */

var data = [1,1,3,4,4,5,6,7,9]

// a
data.push(8);
console.log(data);

// b
data.push(10);
console.log(data);

// c
data.unshift(5);
console.log(data);

// d
var newData = data.splice(5 , 1 , 11)
console.log(newData);

// e
console.log(data);
var newdata = data.splice(4 , 2 , 5 , 7)
console.log(data);