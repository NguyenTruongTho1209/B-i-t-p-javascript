/**
 * Bài 4 :

Khai báo biến ten   và gán  giá trị là tên trường của ban . 
khai báo biến web  và gán giá trị bằng trang web trường của bạn  . 
Khai báo biến diaChi và gán giá trị là địa chỉ trường  của bạn  .  

a ) với các biến đã tạo ở trên tạo một object thongTinTruong với key và value tương ứng . ( lưu ý không tự điền vào ) . Sử dụng console.log để in ra kết quả . 


b ) Tạo object thongTinCanhan  với 
key ten có giá trị là tên của bạn  . 
key maSV có giá trị là mã SV của bạn  của bạn  .  

c ) Với các object vừa tạo in ra kết quả sau : 

`Tôi tên là … MaSV :... học trường :... địa chỉ : …. ` 

d )  Tạo một obj mới rồi  Ghi đè object ThongTinCaNhan vào obj ThongTinTruong  . rồi in ra kết quả  
 */

var ten = 'Trường đại học Kinh Doanh và Công Nghệ Hà Nội';
var web = 'hubt.edu.com.vn';
var diaChi = '124 Vĩnh Tuy , Hai Bà Trưng , Hà Nội';

// a
var thongTinTruong = {
    ten: ten,
    web: web,
    diaChi: diaChi
}
console.log(thongTinTruong);

// b
var thongTinCaNhan = {
    ten: 'Nguyễn Trường Thọ',
    maSV: 18112374
}

// c
console.log(
`Tôi tên là ${thongTinCaNhan.ten} 
maSV: ${thongTinCaNhan.maSV} 
học trường : ${thongTinTruong.ten} 
địa chỉ : ${thongTinTruong.diaChi}`);

// d
var thongTinSinhVien = {
    tenSv: thongTinCaNhan.ten,
    maSV: thongTinCaNhan.maSV,
    tenTruong: thongTinTruong.ten,
    web: thongTinTruong.web,
    diaChi: thongTinTruong.diaChi
}
console.log(thongTinSinhVien);