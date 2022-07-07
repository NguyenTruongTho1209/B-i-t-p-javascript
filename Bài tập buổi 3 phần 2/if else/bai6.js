/**
 * Bài 6 :  
Xếp loại học sinh theo điểm trung Bình . 
Nếu:
Điểm trung bình >= 9.0 là Loại A.
Điểm trung bình >=7.0 và < 9.0 là loại B
Điểm trung bình >=5.0 và < 7.0 là Loại C
Điểm trung bình <5.0 là Loại F
 */

var diem = 4;
if(diem < 0 || diem > 10){
    console.log('Điểm phải lớn hơn 0 và nhỏ hơn 10');
}else if(diem >= 9.0){
    console.log('Học sinh có điểm loại A');
}else if (diem >= 7.0){
    console.log('Học sinh có điểm loại B');
}else if(diem >= 5){
    console.log('Học sinh có điểm loại c');
}else{
    console.log('Học sinh có điểm loại F');
}
