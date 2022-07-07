/**
 * Bài  9 : 
Viết function getDateAgo(date, days)
để hiển thị ngày trong tuần ở định dạng ngắn gọn: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.  
 */

function getDateAgo(date ){
    var newDate = new Date(date)
    newDate.getDay()
    console.log(newDate.toString());
}
getDateAgo('2022-06-13')