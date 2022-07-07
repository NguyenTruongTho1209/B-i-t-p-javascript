/**
 * 
3
a, 	Hãy tạo ra date của ngày đầu tuần này
b,	Hãy tạo date của ngày cuối tuần này
c,	hãy tạo date của ngày đầu tháng này
d,	Hãy tạo date của ngày cuối tháng này
e,	Hãy cho biết tháng này có bao nhiêu ngày

 */

// a
// Ngày đầu tuần => day = 1
// B1 kiểm tra hnay là thứa mấy

// var today = new Date()
// var day = today.getDay()
// console.log(day);

// // B2 tìm chênh lệch với thứ 2 ()
// var diff = day - 1

// // B3 tạo date 
// var date = today.getDate()
// today.setDate(date - diff)

// console.log(today);

// // function tìm các ngày trong tuần
// function getMonday(stringDate , findDay){
//     var today = new Date(stringDate)
//     var day = today.getDay()
//     if(findDay === 0){
//         var diff = day - 7
//     }else{
//         var diff = day - findDay
//     }
//     var date = today.getDate()
//     today.setDate(date - diff)
//     return today.toLocaleDateString()
// }
// console.log(getMonday('2022-6-1' , 0));

// b
// // firstDay.setDate(firstDay.getDate() - 6)
// console.log(firstDay.toString());

// c
// đầu tháng 
var today = new Date()
var nextMonth = today.getMonth() 

today.setMonth(nextMonth , 1)
console.log(today.toLocaleDateString());

// cuối tháng
var today = new Date()
var nextMonth = today.getMonth() + 1

today.setMonth(nextMonth , 0)
console.log(today.toLocaleDateString());
// firstDay.setDate(firstDay.getDay())
// console.log(23 , firstDay.toLocaleString());

// // d
// firstDay.setDate(firstDay.getDate() + 29)
// console.log(27 , firstDay.toLocaleString());

// // e
// console.log(firstDay.getDate());