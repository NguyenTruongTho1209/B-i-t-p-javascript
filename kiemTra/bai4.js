/**
 * Bai 4
a, khóa học kéo dài 100 buổi, mỗi tuần 3 buổi vào T2, T4, T6
nếu T2 tuần này tham gia học thì buổi học thứ 100 là ngày nào, thứ mấy
(không nghỉ buổi nào)
b, Thứ 4 tuần sau là sinh nhật của Minh, hôm đó Minh 20 tuổi, hỏi Minh sinh vào ngày, tháng năm nào
 */

// a
// var today = new Date();
// var day = today.getDay();
// var distance = day - 1;
// var monday = new Date(today.setDate(today.getDate() - distance))
// console.log('Ngày thứ 2 tuần này :' + monday);

// var number = 100 % 3 == 1 ? 1 : 3
// var after = Math.round(100/3)* 7
// console.log('tổng số ngày của 100 buổi là : ' , after);

// var endDate = new Date(monday.setDate(monday.getDate() + after))
// console.log('Ngày diễn ra buổi 100 :' + endDate.toDateString());

// var date = (new Date(endDate)).getDate()
// var afterday = (new Date(endDate)).getDay()
// console.log('Buổi học thứ 100 của khóa học là ngày : ' , date);
// console.log('Buổi học thứ 100 của khóa học là thứ : ' , afterday + 1);

// b
// var today = new Date()
// var day = today.getDay()
// var wednesday = new Date(today.setDate(today.getDate() + 7))
// console.log(wednesday.toDateString());

// var birthDay = new Date(wednesday.setFullYear(wednesday.getFullYear() - 20))
// console.log(birthDay.toDateString());

// chữa bài câu a

function getLastDay (startDay , lesson){
    startDay -= 1;
    var today = new Date();
    var dayOfToday = today.getDay();
    var diff = dayOfToday - startDay;

    var monday = new Date();
    var date = monday.getDate();
    monday.setDate(date - diff);

    var week = Math.floor((lesson - 1)/3);
    var lessonLeft = (lesson - 1) % 3;

    var classDay = week * 7;

    if(lessonLeft == 1 && startDay >= 5){
        classDay += 3;
    }
    if(lessonLeft == 2 && startDay >= 3  && startDay < 5){
        classDay += 5;
    }

    monday.setDate(monday.getDate() + classDay)
    return monday.toString()

}
console.log(getLastDay(2 , 100));