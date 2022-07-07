/**
 * Bài 10  : 
var  obj101 = {
ten:'end game',
hang:'marvel',
nam:'2018'
dienVien:["Tonny", "Jact" , "Tom"]
}

var Tom = {
SN:'12/2/1992',
GT:'Nam'
} 
var Tonny = {
SN:'12/2/1996',
GT:'Nam'
} 

var Jact = {
SN:'12/3/1992',
GT:'Nam'
} 

a )  tạo một array dienVien gộp 3 object Tom , Tonny và Jact . 
b ) Đổi value của key dienVien của obj101 thành array dienVien.
c ) thêm diễn viên Hai = {
SN:'2/3/1993',
GT:'Nam'
} 

d ) Đổi ngày sinh của Tom thành 11/1/1999 .
e )  In ra kết quả cuối cùng của obj101 .

 */

obj101 = {
    ten:'end game',
    hang:'marvel',
    nam:'2018',
    dienVien:["Tonny", "Jact" , "Tom"]
    }
    
    var Tom = {
    Ten: 'Tom',
    SN:'12/2/1992',
    GT:'Nam'
    } 
    var Tonny = {
    Ten: 'Tonny',
    SN:'12/2/1996',
    GT:'Nam'
    } 
    
    var Jact = {
    Ten: 'Jact',
    SN:'12/3/1992',
    GT:'Nam'
    } 

// a
var dienVien = [Tom , Tonny , Jact];

// b
obj101.dienVien = dienVien;

// c
var Hai = {
    Ten: 'Hai',
    SN:'2/3/1993',
    GT:'Nam'
}

obj101.dienVien[obj101.dienVien.length] = Hai;

// d
obj101.dienVien[0].SN = '11/1/1999';
// e
console.log(obj101);
