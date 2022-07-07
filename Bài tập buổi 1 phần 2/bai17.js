/**
 * bài 17: 

var person = {
    name: 'phuong',
    gender: 'nu',
    honu: 'thi'
}

var person2 = {
    name: 'truong',
    gender: 'nam',
    honam: 'nguyen'
}

 // a) 
// để in ra 'thi phuong' ta dung Console.log(person.honu + ' ' + person.name) 
// để in ra 'nguyen truong' ta dung Console.log(person2.honam + ' ' + person2.name) 
// Hay viết công thức tổng quát để khi ta chỉ cần thay tên obj
ta vẫn in ra được 'thi phuong' và 'nguyen truong' mà không cần thay đổi key obj
 */

var person = {
    name: 'phuong',
    gender: 'nu',
    honu: 'thi'
}

var person2 = {
    name: 'truong',
    gender: 'nam',
    honam: 'nguyen'
}

// a

console.log(person['ho' + person.gender] + person.name);
console.log(person2['ho' + person2.gender] + person2.name);