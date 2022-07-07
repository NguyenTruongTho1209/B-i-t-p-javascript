/**
 * Bài 3  
Khái báo biến sanPham là số lượng sản phẩm mà người mua nhập vào  . 

Tính tiền Hàng  bằng toán tử 3 ngôi biết 
mua lẻ  1 đên 20 sản phẩm  giá  10000/ sản phẩm
Nếu mua  > 20 sản phẩm thì giá là 8000/ sản phẩm 
Nếu mua > 50  sản phẩm thì giá là 7000/ sản phẩm 
Nếu mua > = 100 sản phẩm thì giá là 6000/ sản phẩm .

 */

var sanPham = 100;
console.log(
    sanPham >= 1 && sanPham <= 20 ? `Giá của sản phầm là : ${sanPham*10000}` : (
        sanPham > 20 && sanPham <= 50 ? `Giá của sản phẩm là : ${sanPham*8000}` : (
            sanPham > 50 && sanPham < 100 ? `Giá của sản phẩm là : ${sanPham*7000}` : (
                sanPham >= 100 ? `Giá cảu sản phẩm là : ${sanPham*6000}` : 'Bạn chưa mua sản phẩm nào' ) )));

// sử dụng if else 
if (sanPham >= 1 && sanPham <= 20){
    console.log(`Giá của sản phẩm là : ${sanPham*10000}`);
}else if(sanPham > 20 && sanPham <= 50) {
    console.log(`Giá của sản phẩm là : ${sanPham*8000}`);
}else if(sanPham > 50 && sanPham < 100) {
    console.log(`Giá của sản phẩm là : ${sanPham*7000}`);
}else if(sanPham >= 100) {
    console.log(`Giá cảu sản phẩm là : ${sanPham*6000}`);
}else{
    console.log('Bạn chưa mua sản phẩm nào');
}