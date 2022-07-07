/**
 * 
Bài 1
Khai báo một  biến diem với  giá trị số  bất kỳ
Nếu diem < 0 thì in ra “ không hợp lệ “ 
Nếu  0 < =  diem  <  5 in ra  “ kém “ 
Nếu 5 < = diem < 6.5 in ra “ Trung bình” 
Nếu 6.5 < =  diem  < 8 thì in ra “ Khá” 
Nếu 8 < =  diem < = 10 thì in ra “Giỏi” 
Trường hợp còn lại  in ra “ Không hợp lệ “  

 */
var diem = 10;
console.log(
    diem < 0 ? 'không hợp lệ' : (
        diem >= 0 && diemm < 5 ? 'kém' : (
            diem >= 5 && diem < 6.5 ? 'Trung bình ' : (
                diem >= 6.5 && diem < 8 ? 'Khá' : (
                    diem >= 8 && diem <= 10 ? 'Gioi' : 'Không hợp lệ')))));

// sử dụng if else
if (diem < 0 ){
    console.log('Không hợp lệ');
}else if (diem >= 0 && diem < 5) {
    console.log('Kém');
}else if (diem >=5 && diem < 6.5) {
    console.log('Trung Bình');
}else if (diem >= 6.5 && diem < 8) {
    console.log('Khá');
}else if (diem >= 8 && diem <= 10) {
    console.log('Giỏi');
}else {
    console.log('Không hợp lệ');
}