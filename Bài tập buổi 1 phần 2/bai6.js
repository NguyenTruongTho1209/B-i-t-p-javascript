/**
 * Bài 6
cho object sanPham = {
	ten: 'túi xách',
	soLuong: 12,
	mauSac:['Đỏ','xanh','vàng']
	diaChi:{
tinh: 'HCM',
quan:'Q1'
}
}
a, in ra array mauSac
b, Truy vấn đến  màu Vàng của 
c, in ra object dia chi của user
d, Tạo chuỗi String   theo mẫu sau
'Tên Sản phẩm … số lượng… màu ….'
e, hãy thêm đường = 'nguyễn  xiển' vào địa chỉ của sanPham
f,Thêm màu đen vào mauSac
 */

sanPham = {
	ten: 'túi xách',
	soLuong: 12,
	mauSac:['Đỏ','xanh','vàng'],
	diaChi:{
tinh: 'HCM',
quan:'Q1'
    }
}

// a
console.log(32 , sanPham.mauSac);

// b
console.log(35 , sanPham.mauSac[sanPham.mauSac.length - 1]);

// c
console.log(38 , sanPham.diaChi);

// d
console.log(41 , `Tên Sản phẩm ${sanPham.ten} số lượng ${sanPham.soLuong} màu ${sanPham.mauSac}.`);

// e
sanPham.diaChi.duong = 'Nguyễn Xiển';
console.log(sanPham.diaChi);

// f
sanPham.mauSac[sanPham.mauSac.length] = 'Đen';
console.log(sanPham.mauSac);

