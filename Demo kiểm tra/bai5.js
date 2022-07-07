/**
 * Bài 5 : 
a, khóa học kéo dài 88 buổi, mỗi tuần 3 buổi vào T3, T5, T7
nếu T3 tuần này tham gia học thì buổi học thứ 77 là ngày nào, thứ mấy
(không nghỉ buổi nào) . 
b, Thứ 6 tuần sau là sinh nhật của Hoàng, hôm đó Hoàng 25 tuổi, hỏi Hoàng sinh vào ngày, tháng năm nào .
 */

// a
var today = new Date();
var day = today.getDay();
var distance = day - 2;
var Tuesday = new Date(today.setDate(today.getDate() - distance))
console.log('Ngày thứ 3 tuần này :' + Tuesday);

var number = 88%3 == 1?1:3

console.log(number);

var after = Math.round(88/3)* 7
console.log('tổng số ngày của 77 buổi là : ' , after);

var endDate = new Date(Tuesday.setDate(Tuesday.getDate() + after))
console.log('Ngày diễn ra buổi 77 :' + endDate.toDateString());

var date = (new Date(endDate)).getDate()
var afterday = (new Date(endDate)).getDay()
console.log('Buổi học thứ 77 của khóa học là ngày : ' , date);
console.log('Buổi học thứ 77 của khóa học là thứ : ' , afterday + 1);

// b
// xác định mốc thời gian thứ 6 tuần sau 
// var today = new Date()
// var day = today.getDay()
// var Friday = new Date(today.setDate(today.getDate() + 10))
// console.log(Friday.toDateString());

// var birthDay = new Date(Friday.setFullYear(Friday.getFullYear() - 25))
// console.log(birthDay);