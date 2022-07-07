/**
 * Bài 2 :
Khai báo biến ten và gán giá trị là tên của bạn . 
khai báo biến tuoi và gán giá trị bằng với tuổi của bạn  . 
Khai báo biến diaChi và gán giá trị là địa chỉ của bạn  .  

a ) với các biến đã tạo ở trên tạo một object thongTin với key và value tương ứng . ( lưu ý không tự điền vào ) . Sử dụng console.log để in ra kết quả . 
b ) thêm key là nguoiYeu vào object ở câu 2  và thêm giá trị vào (Nếu đã có người yêu thì true ,ngược lại là false )

c ) Tạo object thongTinGiaDinh với 
key mom có giá trị là tên mẹ của bạn  . 
key dad có giá trị là tên bố  của bạn  .  
Ghi đè object thongTinGiaDinh vào Object thongTin và in ra kết quả . 
d ) Truy vấn giá trị của key mom trong object thongTin . 
( console.log để in ra kết quả )
 */

var ten = 'Nguyễn Trường Thọ';
var tuoi = 22 ;
var diaChi = 'Hà Nội';

// a
var thongTin = {
    ten: 'Nguyễn Trường Thọ',
    tuoi: 22,
    diaChi: 'Hà Nội',
    nguoiYeu: function(nguoiYeu){
        if(nguoiYeu){
            console.log('Thọ có người yêu :3');
        }else{
            console.log('Thọ không có người yêu');
        }
    },
    thongTinGiaDinh: {
        mom: 'Lại Thị Huyền',
        dad: 'Nguyễn Minh Cường'
    }
}
// d
console.log(thongTin.thongTinGiaDinh.mom);