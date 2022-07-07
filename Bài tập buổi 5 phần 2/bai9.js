/**
 * // Bài 10 :
var khachHang = [
  { ten: "an", gioiTinh: "nam", diemTichLuy: 125, dichVuDangKy: "A" },
  { ten: "binh", gioiTinh: "nam", diemTichLuy: 30, dichVuDangKy: "B" },
  { ten: "hoang", gioiTinh: "nam", diemTichLuy: 51, dichVuDangKy: "C" },
  { ten: "van", gioiTinh: "nu", diemTichLuy: 75, dichVuDangKy: "D" },
  { ten: "thinh", gioiTinh: "nam", diemTichLuy: 25, dichVuDangKy: "D" },
  { ten: "lam", gioiTinh: "nam", diemTichLuy: 100, dichVuDangKy: "C" },
  { ten: "diep", gioiTinh: "nu", diemTichLuy: 162, dichVuDangKy: "B" },
  { ten: "huong", gioiTinh: "nu", diemTichLuy: 71, dichVuDangKy: "B" },
];

var dichVu = [
  { ten: "A", khuyenMai: 0.2, giaTri: 250 },
  { ten: "B", khuyenMai: 0.18, giaTri: 210 },
  { ten: "C", khuyenMai: 0.15, giaTri: 200 },
  { ten: "D", khuyenMai: 0.12, giaTri: 180 },
];

var bienLai = [
  { ten: "an", giaTri: 300 },
  { ten: "binh", giaTri: 180 },
  { ten: "hoang", giaTri: 170 },
  { ten: "van", giaTri: 100 },
  { ten: "lam", giaTri: 200 },
  { ten: "thinh", giaTri: 210 },
  { ten: "diep", giaTri: 100 },
  { ten: "huong", giaTri: 100 },
];

a , Hãy in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP 
với điều kiện điểm tích lũy lớn hơn 100 và dịch vụ đăng ký có
giá trị lớn hơn 180
b ,Hãy in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký
c ,Hãy tính giá tiền mà mỗi người thực chất cần phải trả với 
hóa đơn của mỗi người = giá trị tại bảng biên lai nhân với khuyến mãi ứng
với gói dịch vụ mà mỗi người đăng ký yêu cầu in ra dưới dạng là 1 array mới

 */
var khachHang = [
    { ten: "an", gioiTinh: "nam", diemTichLuy: 125, dichVuDangKy: "A" },
    { ten: "binh", gioiTinh: "nam", diemTichLuy: 30, dichVuDangKy: "B" },
    { ten: "hoang", gioiTinh: "nam", diemTichLuy: 51, dichVuDangKy: "C" },
    { ten: "van", gioiTinh: "nu", diemTichLuy: 75, dichVuDangKy: "D" },
    { ten: "thinh", gioiTinh: "nam", diemTichLuy: 25, dichVuDangKy: "D" },
    { ten: "lam", gioiTinh: "nam", diemTichLuy: 100, dichVuDangKy: "C" },
    { ten: "diep", gioiTinh: "nu", diemTichLuy: 162, dichVuDangKy: "B" },
    { ten: "huong", gioiTinh: "nu", diemTichLuy: 71, dichVuDangKy: "B" },
  ];
  
  var dichVu = [
    { ten: "A", khuyenMai: 0.2, giaTri: 250 },
    { ten: "B", khuyenMai: 0.18, giaTri: 210 },
    { ten: "C", khuyenMai: 0.15, giaTri: 200 },
    { ten: "D", khuyenMai: 0.12, giaTri: 180 },
  ];
  
  var bienLai = [
    { ten: "an", giaTri: 300 },
    { ten: "binh", giaTri: 180 },
    { ten: "hoang", giaTri: 170 },
    { ten: "van", giaTri: 100 },
    { ten: "lam", giaTri: 200 },
    { ten: "thinh", giaTri: 210 },
    { ten: "diep", giaTri: 100 },
    { ten: "huong", giaTri: 100 },
  ];

// a
function acountVip (input1 , input2){
    input1.map(function(value){
        for (let i = 0; i < input2.length; i++) {
            const element = input2[i];
            if(value.ten == element.ten){
                if(value.dichVuDangKy >= 100 && element.giaTri >= 180){
                    value.vip = 'Có thể đăng kí'
                }else{
                    value.vip = 'Không thể đăng kí'
                }
            }
        }
    })
    return input1
}
 console.log(acountVip(khachHang , bienLai));

 // b
 function account(input , name){
     var array = [];
     input.map(function(value){
         if(value.dichVuDangKy == name){
            array.push(value)
         }
         return array
     })
     return array
 }
 console.log(99 , account(khachHang , 'B'));
 
 // c
 function thanhToan(input1 , input2){
     input1.map(function(value){
         for (let i = 0; i < input2.length; i++) {
             const element = input2[i];
             if(value.giaTri >= element.giaTri){
                 value.tongGiaTri = value.giaTri - element.giaTri*element.khuyenMai
             }else{
                 value.tongGiaTri = value.giaTri
             }
         }
     })
     return input1
 }
 console.log(thanhToan(bienLai , dichVu));