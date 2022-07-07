/**
 * Bài 4,
cho biến học sinh có dạng 
{
	khoiThi: 'A',
	diemThi: {toan: 8, ly: 7, hoa: 7}
	quocTich: 'VN',
	thuongBinh: true
}
var diemChuan = { A : 25, B: 24, C: 26}
var vung = { Vung1: 0,Vung2: 0.5, Vung3: 1.5 }
Hãy tính tổng điểm cho học sinh và cho biết học sinh này đỗ hay trượt biết

a, 	Nếu thi khối A thì điểm Toán tính hệ số 2 ( VD diem = toán x 2 + ly + hoa)
Nếu thi khối B thì điểm Hóa tính hệ số 2
Nếu thi khối C thì điểm Lý hệ số 2

b, 	Hãy thêm vùng thi cho object hocSinh
	Tính lại điểm cho học sinh và kết quả thi

c,	Học sinh nhận học bổng 5tr nếu điểm tổng trên 28 hoặc 
nhận 4tr điểm trên 25 nhưng có hoàn có người thân là thương binh,liệt sỹ hoặc 
nhận học bổng 3tr nếu điểm trên 23 nhưng có quốc tịch Lào
 */

var student = {
    khoiThi: 'A',
	diemThi: {
        toan: 8,
         ly: 7,
          hoa: 7
    },
	quocTich: 'VN',
	thuongBinh: true
}

var diemChuan = {
     A : 25, 
     B: 24, 
     C: 26
}

var vung = { 
    Vung1: 0,
    Vung2: 0.5, 
    Vung3: 1.5 
}
// // a
// var diem;
// tongDiem = student.khoiThi == 'A' ? diem = student.diemThi.toan * 2 + student.diemThi.hoa + student.diemThi.ly : 
// (student.khoiThi == 'B' ? diem = student.diemThi.toan + student.diemThi.hoa * 2 + student.diemThi.ly : 
// (student.khoiThi == 'C' ? diem = student.diemThi.toan + student.diemThi.hoa + student.diemThi.ly * 2 : 0))

// console.log(tongDiem);

// // b
// student.vungThi = "Vung1";
// console.log(student);

// tongDiem = diem + vung.Vung1 ;

// // c
// hocBong = diem > 28 ? 5000000 : 0 || diem > 25 && thuongBinh == true ? 4000000 : 0 || diem > 23 && quocTich == 'Lào' ? 3000000 : 0;
// console.log(hocBong);

// sử dụng if else 
// a
if(student.khoiThi == 'A') {
    diem = student.diemThi.toan * 2 + student.diemThi.hoa + student.diemThi.ly;
    console.log('Điểm thi của học sinh là : ' + diem);
}else if (student.khoiThi == 'B') {
    diem = student.diemThi.toan + student.diemThi.hoa * 2 + student.diemThi.ly;
    console.log('Điểm thi của học sinh là : ' + diem);
}else {
    diem = student.diemThi.toan + student.diemThi.hoa + student.diemThi.ly * 2;
    console.log('Điểm thi của học sinh là : ' + diem);
}
// b
student.vungThi = "Vùng 2";
console.log(student);
if(student.khoiThi == 'A') {
    if (student.vungThi == 'Vùng 1'){
        diem = student.diemThi.toan * 2 + student.diemThi.hoa + student.diemThi.ly + vung.Vung1;
        console.log('Điểm thi của học sinh là : ' + diem);
    }else if (student.vungThi == 'Vùng 2'){
        diem = student.diemThi.toan * 2 + student.diemThi.hoa + student.diemThi.ly + vung.Vung2;
        console.log('Điểm thi của học sinh là : ' + diem);
    }else{
        diem = student.diemThi.toan * 2 + student.diemThi.hoa + student.diemThi.ly + vung.Vung3;
        console.log('Điểm thi của học sinh là : ' + diem);
    }
}else if (student.khoiThi == 'B') {
    if (student.vungThi == 'Vùng 1'){
        diem = student.diemThi.toan + student.diemThi.hoa * 2+ student.diemThi.ly + vung.Vung1;
        console.log('Điểm thi của học sinh là : ' + diem);
    }else if (student.vungThi == 'Vùng 2'){
        diem = student.diemThi.toan + student.diemThi.hoa * 2+ student.diemThi.ly + vung.Vung2;
        console.log('Điểm thi của học sinh là : ' + diem);
    }else{
        diem = student.diemThi.toan + student.diemThi.hoa * 2+ student.diemThi.ly + vung.Vung3;
        console.log('Điểm thi của học sinh là : ' + diem);
    }
}else {
    if (student.vungThi == 'Vùng 1'){
        diem = student.diemThi.toan + student.diemThi.hoa + student.diemThi.ly * 2+ vung.Vung1;
        console.log('Điểm thi của học sinh là : ' + diem);
    }else if (student.vungThi == 'Vùng 2'){
        diem = student.diemThi.toan + student.diemThi.hoa + student.diemThi.ly * 2 + vung.Vung2;
        console.log('Điểm thi của học sinh là : ' + diem);
    }else{
        diem = student.diemThi.toan + student.diemThi.hoa + student.diemThi.ly * 2 + vung.Vung3;
        console.log('Điểm thi của học sinh là : ' + diem);
    }
}

// c

if(diem > 28) {
    console.log('Học sinh nhận được học bổng 5tr');
}else if(diem > 25 && thuongBinh == true) {
    console.log('Học sinh nhận học bổng 4tr');
}else if(diem > 23 && student.quocTich == 'Lào') {
    console.log('Học sinh nhận học bổng 3tr');
}else{
    console.log('Học sinh không nhận được học bổng');
}