/**
 * Bài 5  : 

Khai báo một biến tienLuong  với giá trị là số lương của bạn mong muốn . 
Tính số tiền lương thực lãnh của bạn . Biết rằng : 
Lương thực lãnh  = tienLuong - thuế .
và : 
30% thuế thu nhập nếu lương là 25 triệu. 
15% thuế thu nhập nếu lương từ 7 đến 25 triệu.
7% thuế thu nhập nếu lương dưới 7 triệu.
 */
var tienLuong = 20000000;
var luongThucLanh = 0;

if(tienLuong < 0){
    console.log('Tiền lương phải lớn hơn 0');
}else if(tienLuong > 25000000){
    luongThucLanh = tienLuong - (tienLuong*30)/100;
}else if(tienLuong > 7000000){
    luongThucLanh = tienLuong - (tienLuong*15)/100;
}else if(tienLuong <= 7000000){
    luongThucLanh = tienLuong - (tienLuong*7)/100;
}else if(tienLuong < 0){
    console.log('Tiền lương phải lớn hơn 0');
}

console.log(luongThucLanh);