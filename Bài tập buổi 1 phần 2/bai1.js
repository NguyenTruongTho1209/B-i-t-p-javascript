/**
 * Bài 1  : 


var luongt5 = {
Anh:1222000,
Duy:2250000,
Thai:222225455
}

a ) sử dụng console.log để in ra số lương của Duy . 
b ) Sửa lại tiền lương của Thái là 40000000 . 
c ) Tính tổng tiền lương của Anh , Duy và Thái . 
d ) Thêm bạn Trường với tiền lương là 4444444
e ) Sử dụng console.log để in ra kết như sau : 
Tổng Lương Tháng 4 của Anh , Duy , Thái,Trường  là … (ghi kết quả tại dấu …) .
 */

var luongt5 = {
    Anh:1222000,
    Duy:2250000,
    Thai:222225455
    }
// a
console.log(luongt5.Duy);

// b
luongt5.Thai = 40000000;

// c
tongLuong = luongt5.Anh + luongt5.Duy + luongt5.Thai;
console.log('Tổng tiền lương của Duy , Anh và Thái là : ' + tongLuong);

// d
luongt5.Truong = 4444444;

// e
console.log(`Tổng Lương Tháng 4 của Anh , Duy , Thái,Trường  là ${tongLuong + luongt5.Truong}`);