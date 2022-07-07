/**
 * Bài 5 : 
Cho var phucBirthday = '26-11-1992'
Cho var cuongBirthday= '27-11-1994'
1 Đổi định dạng ngày thành '1992-11-26'
2 Quy đổi về cả 2 về object date
3 So sánh xem phuc hay cuong lớn tuổi hơn
4 Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
	gợi ý: dùng setDate(getDate + 100)

	dùng hàm getDay để tìm ra thứ  biết rằng:
	0: chủ nhật
	1: thứ 2  .. 

 */

var phucBirthday = '26-11-1992'    
var cuongBirthday= '27-11-1994'

// 1
function fixDate (input){
    var arrayDate = input.split('-')
    var daoNguoc = arrayDate.reverse()
    var newData = daoNguoc.join('-')
    return newData
}

// 2
phucBirthday = new Date(fixDate(phucBirthday))
cuongBirthday = new Date(fixDate(cuongBirthday))

console.log(typeof phucBirthday);
console.log(typeof cuongBirthday);

// 3
if(phucBirthday > cuongBirthday){
    console.log('Phúc lớn tuổi hơn Cường');
}else if(phucBirthday < cuongBirthday){
    console.log('Cường lớn tuổi hơn Phúc');
}else{
    console.log('Hai người bằng tuổi nhau');
}

// 4
var date = new Date(phucBirthday.setDate(phucBirthday.getDate() + 100))
console.log(date.toDateString());