/**
 * // Bài 4: 
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

var lichBay = [
    { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
    { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
    { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
    { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
]

a, Hãy in lại tên của các khách hàng sao cho có từ viết hoa ở mỗi chữ cái vd : Nguen Van Nam
b, Hãy sắp xếp lại array khách theo thời gian bắt đầu chuyến bay theo chiều tăng dần
c, Hãy in ra thông các chuyến bay cùng địa điểm 
d, Hãy in ra thông tin của những người cùng giờ bay và cho thêm dữ kiện họ ngồi ghế gì, trên những chuyến bay nào
e, Hãy in ra thông tin chi tiết của người bay vào 9h30 và có cả dữ liệu họ ngồi ghế ghì, trên những chuyến bay nào

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

var lichBay = [
    { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
    { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
    { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
    { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
]

// a
