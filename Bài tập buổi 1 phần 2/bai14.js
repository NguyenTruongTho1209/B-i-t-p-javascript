/**
 * Bài 14 
Cho các Object sau : 

var truongHoc = {
Ten:"ĐH Bách Khoa",
Diachi:"Số  1 Giải Phóng " , 
Nganh:["CNTT","Dệt","Cơ khí"],
SoLop:30
}

var CNTT = {
soLop:8,
Khoa:["Mạng","Toán Tin","AI","Điện tử"]
}
var detMay = {
soLop:6,
Khoa:["May Công nghiệp","Quản lý may mặc","dệt"]
}

var coKhi = {
soLop:6,
Khoa:["Gia Công","Chế Tạo","Điện lạnh"]
}

a ) Tính tổng số lớp học của Trường Bách Khoa .  
b ) Tính tổng tất cả các khoa của các ngành của trường BK . 
c ) Thêm Ngành Điện tử viễn thông với số lớp là 8. Khoa:["Lập trình bảng mạch  ","Điện lạnh","Điều hòa"] và tính lại câu a .  
d ) Tính tổng số khoa của trường BK  . 

e ) Tạo ra một object gồm các key sau :  ten , MaSV ,Nganh ,Khoa. 
(ten và MaSV thì điền thông tin của bạn vào , Nganh và Khoa thì lấy giá trị ở các Object trên  )  
f ) Đổi Khoa AI của ngành CNTT thành "Trí tuệ nhân tạo  " .  
j ) Xóa key Solop và đổi thành key SoSV :5000 .

 */

var truongHoc = {
    Ten:"ĐH Bách Khoa",
    Diachi:"Số  1 Giải Phóng " , 
    Nganh:["CNTT","Dệt","Cơ khí"],
    SoLop:30
    }
    
    var CNTT = {
    soLop:8,
    Khoa:["Mạng","Toán Tin","AI","Điện tử"]
    }
    var detMay = {
    soLop:6,
    Khoa:["May Công nghiệp","Quản lý may mặc","dệt"]
    }
    
    var coKhi = {
    soLop:6,
    Khoa:["Gia Công","Chế Tạo","Điện lạnh"]
    }

// a
tongSoLop = CNTT.soLop + detMay.soLop + coKhi.soLop ;
console.log('Tổng số lớp học của trường là : ' + tongSoLop);

// b
tongKhoa = CNTT.Khoa.length + detMay.Khoa.length + coKhi.Khoa.length;
console.log('Tổng số khoa của các nghành trong trường là : ' + tongKhoa);

// c
truongHoc.Nganh = "Điện tử viễn thông";
var dienTuVienThong = {
    soLop: 8,
    Khoa: ["Lập trình bảng mạch  ","Điện lạnh","Điều hòa"]
}

tongSoLop += dienTuVienThong.soLop;
console.log(tongSoLop);

// d
tongKhoa += dienTuVienThong.Khoa[dienTuVienThong.Khoa.length];

// e
var thongTinSV = {
    ten: 'Nguyễn Trường Thọ',
    maSv: 18112374,
    Nganh: 'CNTT',
    Khoa: 'Mạng'
}

// f

CNTT.Khoa[2] = 'Trí tuệ nhân tạo';

// j
delete truongHoc.SoLop;
truongHoc.soSV = 5000;

console.log(truongHoc);