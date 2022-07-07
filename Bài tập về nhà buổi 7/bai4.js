/**
 * 4:
Cho var phucBirthday = '26-11-1992'
Cho var cuongBirthday= '27-11-1994'
a   Đổi định dạng ngày thành '1992-11-26'
b   Quy đổi về cả 2 về object date
c   So sánh xem phuc hay cuong lớn tuổi hơn
d   Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
	gợi ý: dùng setDate(getDate + 100)

	dùng hàm getDay để tìm ra thứ  biết rằng:
	0: chủ nhật
	1: thứ 2  ..

 */

var phucBirthday = '26-11-1992'
var cuongBirthday= '27-11-1994'

// a
var phuc = phucBirthday.split('-')
var daoChuoi = phuc.reverse();
phucBirthday = daoChuoi.join('-')

var cuong = cuongBirthday.split('-')
var daoChuoi1 = cuong.reverse();
cuongBirthday = daoChuoi1.join('-')

console.log(phucBirthday);

// b
var phucDate = new Date(phucBirthday)
console.log(phucDate);

var cuongDate = new Date(cuongBirthday)
console.log(cuongDate);

// c
if(phucDate > cuongDate){
    console.log('Phúc lơn tuổi hơn Cường');
}else if(cuongDate > phucDate){
    console.log('Cường lớn tuổi hơn Phúc');
}else{
    console.log('Hai người bằng tuổi nhau');
}

phucDate.setDate(phucDate.getDate() + 100)
console.log(phucDate.toDateString());