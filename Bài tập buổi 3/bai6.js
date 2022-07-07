/**
 * B6, 
a, Hãy xếp loại học lực học sinh theo điểm bằng if else
b, Hãy xếp loại học lực học sinh theo điểm bằng toán tử 3 ngôi

Điểm từ 10 đến 9 là giỏi
Từ 7-8 là khá
Từ 5-6 là trung bình
Dưới 5 là yếu

 */

var diem = 10 ;

if(diem >= 9 && diem == 10){
    console.log('Giỏi');
}else if(diem >= 7 && diem <= 8){
    console.log('Khá');
}else if(diem >= 5 && diem <= 6){
    console.log('Trung Bình');
}else {
    console.log('Yếu');
}

// toán tử 3 ngôi
console.log(diem == 10 && diem >= 9 ? 'Giỏi' : (diem >= 7 && diem <= 8 ? 'Khá' : (diem >= 5 && diem <= 6 ? 'Trung Bình' : 'Yếu')));