/**
 * Bài 2 :


var  data03 = ['Cam','Xoài','Mít','Bưởi ','Quýt,'Dưa gang']

a ) Copy array data03. Bằng  …

b )  Sửa phần tử 'Dưa gang' thành 'Dưa hấu'

c ) Thêm 'mận' vào giữa data03 .

d ) Thêm 'Dứa' vào đầu của data03 và 'Chanh'  vào cuối data03 .
 */

var data2 = ['Cam','Xoài','Mít','Bưởi ','Quýt','Dưa gang']

// a
// data2.push(...data2)
// console.log(data2);

// b
data2.splice(5 , 1 , 'Dưa hấu')
console.log(data2);

// c

data2.splice(3 , 0 , 'mận')
console.log(data2);

// d
data2.unshift('Dứa')
data2.push('Chanh')
console.log(data2);