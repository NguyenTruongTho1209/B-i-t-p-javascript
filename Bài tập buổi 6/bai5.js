/**
 * Cho string 
var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';

5.0: đếm xem có tất cả bao ký tự
5.1: .indexOf tìm xem nodemy nằm ở vị trí nào
5.2: .indexOf tìm xem Nodemy nằm ở vị trí nào
5.3: dùng .startWith kiểm tra xem có bắt đầu với Welcome không
5.4: dùng .substring để lấy chữ Academy
5.5: dùng .split để tách các từ
5.6: dùng .trim() để xóa các dấu cách ngoài rìa
5.7: dùng .include để kiểm tra xem Nodemy có trong câu trên không
5.8  dùng .replace để thay thế Nodemy thành NODEMY
5.9: dùng .toUppercase để in hoa chữ cái
5.10 dùng .charAt để lấy 1 ký tự ở vị trí số 4
 */

var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy'

// 5.0
var count = greeting.length;
console.log(22 , count);

// 5.1
var findString = greeting.indexOf('nodemy')
console.log(26 , findString);

// 5.2
var findNodemy = greeting.indexOf('Nodemy')
console.log(30 , findNodemy);

// 5.3

var stringStart = greeting.startsWith('Welcome')
console.log(35 , stringStart);

// 5.4
var findAcademy = greeting.substring(greeting.length - 7)
console.log(findAcademy);

// 5.5

var detacthed = greeting.split(' ' || ',')
console.log(detacthed);

// 5.6
greeting.trim()

// 5.7
var checkNodemy = greeting.includes('Nodemy')
console.log(checkNodemy);

// 5.8
var fixString = greeting.replace(/Nodemy/g , 'Nodemy'.toUpperCase())
console.log(fixString);
  
// 5.9
var upperCase = greeting.toUpperCase()
console.log(upperCase);

//  5.10
var findChar = greeting.charAt(4)
console.log(findChar);