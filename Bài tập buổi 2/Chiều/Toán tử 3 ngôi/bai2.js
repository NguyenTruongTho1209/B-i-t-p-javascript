/**
 * Bai 2,: 
Cho biến soDienThoai là một array gồm nhiều  số có 1 chữ số bất kỳ .. 
Nếu soDienThoai để trống thì in ra  “Không được để trống “ 
Nếu soDienThoai  ít hơn hoặc nhiều hơn 10 phần tử thì in ra  “ Sđt không hơp lệ “ 
Nếu soDienThoai  có 10 phần tử “SĐT hợp lệ “ và in ra soDienThoai 
 */

var soDienThoai = '0339951231';

console.log(
    soDienThoai == '' ? 'Không được để trống' : (
        soDienThoai.length < 10 ? 'Số điện thoại không hợp lệ' : (
            soDienThoai.length == 10 ? 'Số điện thoại hợp lệ ' + soDienThoai : 'Số điện thoại không hợp lệ')));

// sử dụng if else 
if(soDienThoai == '') {
    console.log('Không được để trống');
}else if (soDienThoai.length < 10) {
    console.log('Số điện thoại không hợp lệ');
}else if (soDienThoai.length == 10) {
    console.log('Số điện thoại hợp lệ : ' + soDienThoai);
}else{
    console.log('Số điện thoại không hợp lệ');
}