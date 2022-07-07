/**
 * // Bài 3: 
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

var phiCuoc = [
    {tennuoc : 'Han Quoc',  giacuoc: 20},
    {tennuoc : 'UK',  giacuoc: 30},
    {tennuoc : 'US',  giacuoc: 29},
    {tennuoc : 'Canada',  giacuoc: 25},
]


var bienLai = [
    {ten: 'nam', giaTri:300, diachiden: 'Han Quoc'},
    {ten: 'hieu', giaTri:180, diachiden: 'UK'},
    {ten: 'nam', giaTri:180, diachiden: 'US'},
    {ten: 'tram', giaTri:180, diachiden: 'US'},
    {ten: 'dat', giaTri:170, diachiden: 'Han Quoc'},
    {ten: 'anh', giaTri:100, diachiden: 'UK'},
    {ten: 'hieu', giaTri:180, diachiden: 'Han Quoc'},
    {ten: 'lam', giaTri:200, diachiden: 'Han Quoc'},
    {ten: 'quy', giaTri:210, diachiden: 'Canada'},
    {ten: 'diep', giaTri:100, diachiden: 'US'},
    {ten: 'huong', giaTri:100, diachiden: 'Canada'},
]

a , Hãy in lại tên của các khách hàng sao cho có từ viết hoa ở mỗi chữ cái vd : Nguen Van Nam
b , Hãy in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP với điều kiện điểm tích lũy lớn hơn 100 và dịch vụ đăng ký có 
giá trị lớn hơn 180
c , Hãy in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký  
d , Hãy tính số tiền của mỗi khách hàng cần phải trả và hiện tất cả dưới dạng 1 array object với công thức 
 tiền khách hàng cần trả = giaTri*khuyenMai + cứ khi giá trị dạt 100 thì phải cộng thêm giacuoc tương đương với địa chỉ được gửi đến

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

var phiCuoc = [
    {tennuoc : 'Han Quoc',  giacuoc: 20},
    {tennuoc : 'UK',  giacuoc: 30},
    {tennuoc : 'US',  giacuoc: 29},
    {tennuoc : 'Canada',  giacuoc: 25},
]


var bienLai = [
    {ten: 'nam', giaTri:300, diachiden: 'Han Quoc'},
    {ten: 'hieu', giaTri:180, diachiden: 'UK'},
    {ten: 'nam', giaTri:180, diachiden: 'US'},
    {ten: 'tram', giaTri:180, diachiden: 'US'},
    {ten: 'dat', giaTri:170, diachiden: 'Han Quoc'},
    {ten: 'anh', giaTri:100, diachiden: 'UK'},
    {ten: 'hieu', giaTri:180, diachiden: 'Han Quoc'},
    {ten: 'lam', giaTri:200, diachiden: 'Han Quoc'},
    {ten: 'quy', giaTri:210, diachiden: 'Canada'},
    {ten: 'diep', giaTri:100, diachiden: 'US'},
    {ten: 'huong', giaTri:100, diachiden: 'Canada'},
]

// a
// function fixName (input){
//     var stringName = input.map(function(value){
//         value.ten = value.ten.split(' ')
//         return value
//     })

//     var newName = stringName.map(function(value){
//         var upperCaseName = value.ten.map(function(value1){
//             return value1.replace(value1[0],value1[0].toUpperCase())
//         }).join(' ')
//         value.ten = upperCaseName
//         return value
//     })
//     return newName
// }
// // console.log(fixName(khachHang));

// // b
// function customerService (input1 , input2){
//     for (let i = 0; i < input1.length; i++) {
//         for (let j = 0; j < input2.length; j++) {
//             if(input1[i].dichVuDangKy = input2[j].ten){
//                 input1[i].giaTriDichVu = input2[j].giaTri
//             }
//         }
//     }
//     return input1
// }
// // console.log(customerService(khachHang , dichVu));
// var customer = [];
// customer = customerService(khachHang , dichVu)
// console.log(customer);
// function vipCard (input){
//     var vipPersons = input.filter(function(value){
//         if(value.diemTichLuy >= 100 && value.giaTriDichVu >= 180){
//             return true
//         }
//     })
//     return vipPersons
// }
// console.log(130 , vipCard(customer));

// c
// console.log(khachHang);
// var sortCustomer = khachHang.sort(function(a , b){
//     if(a.dichVuDangKy < b.dichVuDangKy){
//         return -1
//     }
// })
// console.log(138 , sortCustomer);

// d
