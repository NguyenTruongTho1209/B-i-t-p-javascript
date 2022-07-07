/**
 * 2
var sinhNhat = ‘10/5/2000’
a, năm nay bao nhiêu tuổi
b, Ngày sinh nhật tiếp theo vào thời điểm nào

 */

// a
var birthDay = new Date(2000 , 4 , 10)
var date = new Date()

var dateYear = date.getFullYear()
var namSinh = birthDay.getFullYear()

var tuoi = dateYear - namSinh 
console.log('Số tuổi là : ' + tuoi);

// b
birthDay.setFullYear(2023)
console.log(birthDay.toLocaleString());
