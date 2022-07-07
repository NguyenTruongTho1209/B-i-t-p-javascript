/**
 * Bài 9 :
var tenKhach = [
    {ten: 'nguyen the su', gioBay: '11:30', diemDen: 'Nha Trang', veKhoang: 'S'}, 
    {ten: 'ngo van khoai', gioBay: '9:30', diemDen: 'Ha Noi', veKhoang: 'A'}, 
    {ten: 'tau dau hu', gioBay: '10:15', diemDen: 'Hai Phong', veKhoang: 'B'}, 
    {ten: 'chuyen lua gat', gioBay: '13:30', diemDen: 'Nha Trang', veKhoang: 'C'}, 
    {ten: 'le quan quy', gioBay: '14:30', diemDen: 'TP.HCM', veKhoang: 'A'}, 
    {ten: 'hoang hao hoa', gioBay: '11:30', diemDen: 'Nam Dinh', veKhoang: 'B'}, 
]

var choNgoi = [
    {ten: 'Ghe hang king', mave:'S'},
    {ten: 'Ghe hang thuong gia', mave:'A'},
    {ten: 'Ghe hang pho thong', mave:'B'},
    {ten: 'Ghe hang pho cap', mave:'C'},
]

var chuyenBay = [
    { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
    { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
    { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
    { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
]

a ) Viết function in ra thông tin của những người cùng giờ bay và cho thêm dữ kiện họ ngồi ghế gì,
    trên những chuyến bay nào .
b ) Hãy in ra thông tin chi tiết của người bay vào 9h30 và có cả dữ liệu họ ngồi ghế ghì,
    trên những chuyến bay nào .
c ) Viết function tìm theo tên hành khách và in ra chuyến bay của họ 
 */
var tenKhach = [
    {ten: 'nguyen the su', gioBay: '11:30', diemDen: 'Nha Trang', veKhoang: 'S'}, 
    {ten: 'ngo van khoai', gioBay: '9:30', diemDen: 'Ha Noi', veKhoang: 'A'}, 
    {ten: 'tau dau hu', gioBay: '10:15', diemDen: 'Hai Phong', veKhoang: 'B'}, 
    {ten: 'chuyen lua gat', gioBay: '13:30', diemDen: 'Nha Trang', veKhoang: 'C'}, 
    {ten: 'le quan quy', gioBay: '14:30', diemDen: 'TP.HCM', veKhoang: 'A'}, 
    {ten: 'hoang hao hoa', gioBay: '11:30', diemDen: 'Nam Dinh', veKhoang: 'B'}, 
]

var choNgoi = [
    {ten: 'Ghe hang king', mave:'S'},
    {ten: 'Ghe hang thuong gia', mave:'A'},
    {ten: 'Ghe hang pho thong', mave:'B'},
    {ten: 'Ghe hang pho cap', mave:'C'},
]

var chuyenBay = [
    { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
    { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
    { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
    { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
]

// a
// function thongTin(input1 , input2 , input3){
//     for(var i = 0 ; i < input1.length ; i++){
//         for(var j = 0 ; j < input2.length ; j++){
//             if(input1[i].veKhoang == input2[j].mave){
//                 input1[i].tenGhe = input2[j].ten
//             }
//         }
//     }
    
//     for(var i = 0 ; i < input1.length ; i++){
//         for(var j = 0 ; j < input3.length ; j++){
//             if(input1[i].gioBay == input3[j].gioBay ){
//                 if(input1[i].diemDen == input3[j].diemDen){
//                     input1[i].maMayBay = input3[j].maMayBay
//                 }
//             }
//         }
//     }
//     return input1
// }
function checkCustomerSameTime(customer) {
    // duyet trong mang tenKhach
    for (let i = 0; i < tenKhach.length; i++) {
      const item = tenKhach[i];
      if (item.gioBay === customer.gioBay && item !== customer) {
        return customer;
      }
    }
    return null;
  }
  
  function mapDataCustomer(customer) {
    // map thong tin ghe ngoi
    for (let i = 0; i < choNgoi.length; i++) {
      const cho = choNgoi[i];
  
      if (cho.mave === customer.veKhoang) {
        customer.tenGheNgoi = cho.ten;
      }
    }
  
    // map thong tin chuyen bay
    for (let i = 0; i < chuyenBay.length; i++) {
      const chuyen = chuyenBay[i];
  
      if (
        chuyen.gioBay === customer.gioBay &&
        chuyen.diemDen === customer.diemDen
      ) {
        customer.maMayBay = chuyen.maMayBay;
      }
    }
  
    return customer;
  }
  
  function main() {
    var arrToDisplay = [];
  
    //tim nhung khach hang trung gio bay can in ra
    for (let i = 0; i < tenKhach.length; i++) {
      const khachHang = tenKhach[i];
      var ketqua = checkCustomerSameTime(khachHang);
      if (ketqua) {
        arrToDisplay.push(ketqua);
      }
    }
  
    for (let i = 0; i < arrToDisplay.length; i++) {
      const element = arrToDisplay[i];
      console.log(mapDataCustomer(element));
    }
  }
  
  main();


// console.log(thongTin(tenKhach , choNgoi , chuyenBay));

// b
for(var i = 0 ; i < tenKhach.length ; i++){
    if(tenKhach[i].gioBay === '9:30'){
        console.log(tenKhach[i]);
    }
}

// c
function findClient (input , input2 , name){
    for(var i = 0 ; i < input.length ; i++){
        for(var j = 0 ; j <input2.length ; j++){
            if(input[i].ten == name ){
                if(input[i].gioBay == input2[j].gioBay && input[i].diemDen == input[j].diemDen){
                    console.log(input2[j]);
                }
            }
        }
    }
}

findClient(tenKhach , chuyenBay , 'nguyen the su')