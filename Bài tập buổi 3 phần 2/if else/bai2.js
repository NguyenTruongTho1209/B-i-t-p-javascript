/**
 * Bài 2  : Áp dụng hàm điều kiện  ( if else)
Cho biến soDienThoai là một array gồm nhiều  số nguyên dương  bất kỳ .. 
Nếu soDienThoai để trống thì in ra  “Không được để trống “ 
Nếu soDienThoai  ít hơn hoặc nhiều hơn 10 phần tử thì in ra  “ Sđt không hơp lệ “ 
Nếu soDienThoai  có 10 phần tử “SĐT hợp lệ “ và in ra soDienThoai 
 */

var soDienThoai = '1234567890';
if(soDienThoai == ''){
    console.log('Không được để trống');
}else if(soDienThoai.length < 10){
    console.log('Số điện thoại không hợp lệ');
}else{
    console.log('Số điện thoại hợp lệ : ' + soDienThoai);
}
