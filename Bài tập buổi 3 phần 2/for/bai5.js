/**
 * 
Bài 5 :  Sử dụng vòng lặp for 
var sanPham = [{ten :"Túi xách",gia:10000,soLuong:100},{ten :"dày",gia:15000,soLuong:30},{ten :"Dép",gia:12000,soLuong:30},{ten :"Ví",gia:101000,soLuong:20}];

a ) Tính tổng số lượng các sản phẩm trên  . 
b ) Xếp các sản phẩm theo giá tăng dần . 
c ) Sử dụng vòng lặp để tìm sản phẩm có giá là 101000 đ . (In ra tên giá và số lượng)
d ) Sử dụng vòng lặp để tìm sản phẩm theo tên người dùng nhập vào
 */
var sanPham = [
    {
    ten :"Túi xách",
    gia:10000,
    soLuong:100
},
    {
    ten :"dày",
    gia:15000,
    soLuong:30
},
    {ten :"Dép",
    gia:12000,
    soLuong:30
},
    {ten :"Ví",
    gia:101000,
    soLuong:20
}];

// a
var tong = 0;
for(var i = 0 ; i < sanPham.length ; i++){
    tong = tong + sanPham[i].soLuong;
}
console.log(36,'Tổng số lượng sản phầm là : ' + tong);

// b
for(var i = 0 ; i < sanPham.length ; i++){
    for(var j = i + 1 ; j< sanPham.length ; j++){
        if(sanPham[i].gia < sanPham[j].gia){
            var tangDan = sanPham[i];
            sanPham[i] = sanPham[j];
            sanPham[j] = tangDan;
        }
    }
}
console.log(48 , 'Sản phẩm sau khi được sắp xếp theo giá giảm dần là : ');
console.log(sanPham);

// c
var max = 0;
for(var i = 0 ; i < sanPham.length ; i++){
    if(max < sanPham[i].gia){
        max = sanPham[i]
    }
}
console.log(57,'Sản phẩm có giá cao nhất là : ');
console.log(max);

// d
var timKiem = 'Dép'

for(var i = 0 ; i < sanPham.length ; i++){
    if(timKiem == sanPham[i].ten){
        console.log(64,sanPham[i]);
    }
}