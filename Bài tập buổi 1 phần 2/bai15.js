/**
 * 
 Bai 15: 
var data_ex2 = [1, 2, 'a', 3, '2', 1, 'c', 2, 3, 4, 'c', '3', 5, 6, 5, 4, 6, 'a']

a, Nếu ta ‘Cộng, trừ, nhân, chia’ 1 số với các ký tự trong data_ex2 thì điều gì sẽ xảy ra 
(liệt kê hết tất cả trường hợp)
b, Nếu ta ‘Cộng, trừ, nhân, chia’ 1 ký tự với các ký tự trong data_ex2 thì điều gì sẽ xảy ra 
(liệt kê hết tất cả trường hợp)
 */

var data_ex2 = [1, 2, 'a', 3, '2', 1, 'c', 2, 3, 4, 'c', '3', 5, 6, 5, 4, 6, 'a'];

// a
console.log(data_ex2[2] + 1);
console.log(data_ex2[2] + 1.5);

console.log(data_ex2[2] - 1);
console.log(data_ex2[2] - 1.5);

console.log(data_ex2[2] * 1);
console.log(data_ex2[2] * 1.5);

// b 

console.log(data_ex2[2] + 'a');
console.log(data_ex2[2] + 'a');

console.log(data_ex2[2] - 'a');
console.log(data_ex2[2] - 'a');

console.log(data_ex2[2] * 'a');
console.log(data_ex2[2] * 'a');