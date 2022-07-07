/**
 * Bài 11 :   var  Arr11 =[1,2,6,8,{name:"Hải",age:22},12,14,[4,6,2]];

a ) Đổi name và age của object con thành Huy và 21 . 
b )  truy vấn  đến key name . 
c )  Đổi phần tử cuối thành   object sau  {name:"...",age:"..."} 
( điền thông tin của bạn vào dấu … )
 */

var  arr11 =[1,2,6,8,{name:"Hải",age:22},12,14,[4,6,2]];

// a
arr11[4].name = "Huy";
arr11[4].age = 21;

// b
console.log(arr11[4].name);

// c
arr11[arr11.length - 1] = {
    name: 'Thọ',
    age: 22
}

console.log(arr11);