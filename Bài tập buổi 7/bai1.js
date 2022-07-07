/**
 * / Bài 1: 
cho biến a là mốc thời gian hiện tại
a) In ra giá trị của a 
b) In ra giá trị của a dưới dạng String 
c) In ra ngày, tháng, năm hiện tại 
d) Ghi đè ngày, tháng , năm của a bằng ngày tháng năm theo ý muốn
 */

// a
var a = new Date();
console.log(a);

// b
console.log(a.toDateString());

// c
console.log(18 , a.toLocaleDateString());

// d
a.setFullYear(2000 , 8 , 12)
console.log(a);