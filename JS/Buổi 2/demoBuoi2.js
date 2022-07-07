console.log(10/1 + '3' + 1);
// 1031 

var number = parseInt('3');
console.log(typeof number);

var string = number.toString();
console.log(typeof string);

console.log(10,4 > 5);
console.log(11,4 < 5);
console.log(12,4 <= 5);
console.log(13,4 >= 5);
console.log(13,'4' > '5');
console.log(15,'4' < '5');
console.log(16,'a' > 'b');
console.log(17,'a' < 'b');
console.log(18,'12' > 'ad');
console.log(19,'12' < 'ad');
console.log(20,12 < 'ad');
console.log(21,12 > 'ad');

console.log(23 , 2 == '2');
console.log(24, 2 === '2');

console.log(!(1 < 2));
console.log(1 !== 2);
console.log(!(1 != 2));

console.log(4 ** 2);
console.log(4 ** (1/2));

var number = 10;
console.log(number++);
console.log(++number);

console.log(number++ + ++number - ++number - number-- + --number);
// 10 + 12 - 13 - 13 + 11

var diemThi = 25
console.log(diemThi >= 26 || diemThi >= 20 || diemThi >= 28);

var user = {
    gioiTinh: 'nu',
    mangThai: true
};
console.log(user.gioiTinh === 'nu' && user.mangThai === true );

// để nhận trợ cấp thì tuổi < 18 hoặc tuổi > 60 hoặc thất nghiệp


var user2 = {
    tuoi: 65,
    gioiTinh: 'nam'
}
console.log(user2.tuoi < 18 || user2.tuoi > 60 || user2.nghe === '');

// để nhận trợ cấp thì tuổi < 18 nhận 2tr hoặc > 60 nhận 3tr
// toán tử 3 ngôi
var troCap = user2.tuoi < 18 ? 2000000 : 0 || user2.tuoi > 60 ? 3000000 : 0 ;

console.log(troCap);

// để nhận trợ cấp tuổi > 18 nhận 2tr hoặc nữ > 60 nhận 3tr hoặc nam >= 65 nhận 2tr5

troCap = user2.tuoi < 18 ? 2000000 : (user2.tuoi > 60 && user2.gioiTinh === 'nữ' ? 3000000 :(user2.tuoi >= 65 && user2.gioiTinh === 'nam' ? 2500000 : 0));

console.log(troCap);

var test = 18 ? true : false 

console.log(test);

// true : số dương // số âm // string có data // array // object 
// false : 0 // '' // NaN // undefined // null 