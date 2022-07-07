/**
 * Bài 2 :  

Cho object sau  : 
var hocVien = {
ten:”Văn Anh”,
tuoi:23,
diachi:”Hà Nội”
}

Yêu cầu 
a )Thêm vào Object hocVien , họ là “ Đào” . 
b ) Sử dụng console.log để in ra chuỗi sau : “Tôi tên Đào Văn Anh năm nay 23 tuổi địa chỉ Hà Nội “ 
c ) Sửa họ ,ten , tuoi , diachi của Object hocVien thành các thông tin của bạn . 
d ) Tương tự như câu b ,  sử dụng console.log in ra các thông tin của bạn.
e )Xóa key diachi và thay bằng noiSinh và điền thông tin của bạn vào .
f ) Sử dụng console.log để in ra cuối cùng  . 
 */

var hocVien = {
    ten: 'Văn Anh',
    tuoi: 23,
    diaChi: 'Hà Nội',
}

// a
hocVien.ho = "Đào";
console.log(hocVien)

// b
console.log(`Tên tôi là ${hocVien.ho} ${hocVien.ten} năm nay ${hocVien.tuoi} địa chỉ ${hocVien.diaChi}`);

// c
hocVien.ho = 'Nguyễn';
hocVien.ten = 'Trường Thọ';
hocVien.tuoi = 22;
console.log(hocVien);

// d
console.log(`Tên tôi là ${hocVien.ho} ${hocVien.ten} năm nay ${hocVien.tuoi} địa chỉ ${hocVien.diaChi}`);

// e
delete hocVien.diaChi;
hocVien.noiSinh = 'Ngải Khê - Tân Dân - Phú Xuyên - Hà Nội';

// f
console.log(hocVien);
