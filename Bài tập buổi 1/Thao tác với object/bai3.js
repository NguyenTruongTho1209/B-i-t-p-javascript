/**
 * Bài 3 cho Object sau : 

var luongThang4 = {
Anh:10000,
Duy:20000,
Thai:22222
}

a ) sử dụng console.log để in ra số lương của Duy . 
b ) Sửa lại tiền lương của Thái là 40000 . 
c ) Tính tổng tiền lương của Anh , Duy và Thái . 
d ) Sử dụng console.log để in ra kết như sau :
Tổng Lương Tháng 4 của Anh , Duy , Thái là … 
(ghi kết quả tại dấu …) 
 */

var luongThang4 = {
    Anh:10000,
    Duy:20000,
    Thai:22222
    };

// a
console.log(luongThang4.Duy);

// b
luongThang4.Thai = 40000;
console.log(luongThang4);

// c
var tongLuong = luongThang4.Anh + luongThang4.Duy + luongThang4.Thai;
console.log(tongLuong);

// d
console.log('Tổng lương tháng 4 của Anh , Duy và Thái là : ' + tongLuong);
