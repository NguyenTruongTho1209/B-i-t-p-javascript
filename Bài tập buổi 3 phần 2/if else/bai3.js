/**
 * Bài 3 
Khái báo biến sanPham là số lượng sản phẩm mà người mua nhập vào  . 

Tính tiền Hàng  bằng hàm điều kiện if else  biết 
mua lẻ  1 đên 20 sản phẩm  giá  10000/ sản phẩm
Nếu mua  > 20 sản phẩm thì giá là 8000/ sản phẩm 
Nếu mua > 50  sản phẩm thì giá là 7000/ sản phẩm 
Nếu mua > = 100 sản phẩm thì giá là 6000/ sản phẩm . 
 */

var sanPham = 60;
var tienHang = 0
if(sanPham >=100){
    tienHang = sanPham*6000;
}else if(sanPham > 50){
    tienHang = sanPham*7000;
}else if(sanPham > 20){
    tienHang = sanPham*8000;
}else if(sanPham > 0 && sanPham <= 20){
    tienHang = sanPham*10000;
}else{
    console.log('Số lượng sản phẩm phải lớn hơn 0 ');
}

console.log(`Tiền hàng là : ${tienHang}`);