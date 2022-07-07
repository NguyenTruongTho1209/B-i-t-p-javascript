/**
 * Bài  8 

var khachHang = [
    {ten:'nguyen van nam', gioiTinh: 'nam', diemTichLuy: 125, dichVuDangKy: 'A'},
    {ten:'dao linh huong', gioiTinh: 'nu', diemTichLuy: 170, dichVuDangKy: 'B'},
    {ten:'le dinh hieu', gioiTinh: 'nam', diemTichLuy: 115, dichVuDangKy: 'C'},
    {ten:'nguyen tien dat', gioiTinh: 'nam', diemTichLuy: 75, dichVuDangKy: 'B'},
    {ten:'nguyen van quy', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'A'},
    {ten:'tran ngoc diep', gioiTinh: 'nu', diemTichLuy: 105, dichVuDangKy: 'B'},
    {ten:'lai the anh', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'C'},
    {ten:'tran thi ngoc tram', gioiTinh: 'nu', diemTichLuy: 65, dichVuDangKy: 'C'},
]

var dichVu = [
    {ten: 'A', khuyenMai: 0.2, giaTri:250},
    {ten: 'B', khuyenMai: 0.18, giaTri:210},
    {ten: 'C', khuyenMai: 0.15, giaTri:200},
]

var hangHoa = [
	{id: 1, product:'P1 ', price: 259000, tonKho: 100},
	{id: 2, product: 'P1', price: 129000, tonKho: 230},
	{id: 3, product: 'O2', price: 749000, store: 130},
	{id: 4, product: 'O6', price: 499000, store: 240},
] 
a ) Viết function in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP với điều kiện điểm tích lũy lớn hơn 100 . .
b ) Viết function in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký .

c ) Viết function in ra danh sách các khách hàng nam .
Viết function in ra danh sách các khách hàng nữ .
d )  Viết function tính giá sản phẩm theo từng khách hàng .  
Nếu số lượng người dùng cần mua quá số lượng còn trong kho 
thì in ra “ Trong kho không đủ sản phẩm , vui lòng mua ít hơn “ . 

Ví dụ :  Nguyễn Văn A  , đăng ký dịch vụ A ( khuyến mãi = 20%) và mua sản phẩm O2 với số lượng 10 cái .
 thì giá là 749000*10 -( 749000*10 )*0.2.

 */
var khachHang = [
    {ten:'nguyen van nam', gioiTinh: 'nam', diemTichLuy: 125, dichVuDangKy: 'A'},
    {ten:'dao linh huong', gioiTinh: 'nu', diemTichLuy: 170, dichVuDangKy: 'B'},
    {ten:'le dinh hieu', gioiTinh: 'nam', diemTichLuy: 115, dichVuDangKy: 'C'},
    {ten:'nguyen tien dat', gioiTinh: 'nam', diemTichLuy: 75, dichVuDangKy: 'B'},
    {ten:'nguyen van quy', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'A'},
    {ten:'tran ngoc diep', gioiTinh: 'nu', diemTichLuy: 105, dichVuDangKy: 'B'},
    {ten:'lai the anh', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'C'},
    {ten:'tran thi ngoc tram', gioiTinh: 'nu', diemTichLuy: 65, dichVuDangKy: 'C'},
]

var dichVu = [
    {ten: 'A', khuyenMai: 0.2, giaTri:250},
    {ten: 'B', khuyenMai: 0.18, giaTri:210},
    {ten: 'C', khuyenMai: 0.15, giaTri:200},
]

var hangHoa = [
	{id: 1, product:'P1 ', price: 259000, tonKho: 100},
	{id: 2, product: 'P1', price: 129000, tonKho: 230},
	{id: 3, product: 'O2', price: 749000000, store: 130},
	{id: 4, product: 'O6', price: 499, store: 240},
]

// a
function vip (input){
    var person = []
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].diemTichLuy >= 100){
            person[person.length] = input[i]
        }
    }
    return person
}
// console.log(70 , vip(khachHang));

// b
function findService(input , service){
    var person = [];
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].dichVuDangKy == service){
            person[person.length] = input[i]
        }
    }
    return person
}
// console.log(82 , findService(khachHang , 'A'));

// c
function findGender (input , gender){
    var person = [];
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].gioiTinh == gender){
            person[person.length] = input[i]
        }
    }
    return person
}

// console.log(95 , findGender(khachHang , 'nam'));
// console.log(96 , findGender(khachHang , 'nu'));

// d
function tinhGia (input){
    
}