/**
 * Bài 1 : Sử dụng console.log in ra các kết quả sau  : 

a ) : “Bootcamp 2 thực hành Nodemy buổi 1“ 
b ) : 43674 
c ) : [‘Hoa’,’Hải’,’Huy’,’Thái’]
d ) : {Ten:‘Tên của bạn’,Ngaysinh:’Ngày Sinh của bạn’,Diachi:’Địa chỉ của bạn’} 
e ) :  Primitive values, like "John Doe", cannot have properties or methods (because they are not objects). 
But with JavaScript, methods and properties are also available to primitive values, 123 
\because JavaScript treats primitive values as objects when executing methods and properties.

 */
//a
console.log('Bootcamp 2 thực hành Nodemy buổi 1');
// b
console.log(43674);
// c
var arr = ['Hoa','Hải','Huy','Thái'];
console.log(arr);
// d
var acount = {
    Ten: 'Nguyễn Trường Thọ',
    NgaySinh: '12/09/2000',
    DiaChi: 'số 48 - ngõ 460/44 Khương Đình - Thanh Xuân - Hà Nội'
};

console.log(acount);
// e
console.log(`Primitive values, like "John Doe", cannot have properties or methods (because they are not objects). 
But with JavaScript, methods and properties are also available to primitive values, 123 
\\because JavaScript treats primitive values as objects when executing methods and properties.
`)
// f
 var ten = 'Nguyễn Trường Thọ';
 var tuoi = 22;
 console.log(`Tên của tôi là ${ten} năm nay ${tuoi}`)