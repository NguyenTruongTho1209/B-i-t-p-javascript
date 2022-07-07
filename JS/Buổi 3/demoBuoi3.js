var soDien = 500;
// 50 số đầu giá 2000
// 51-100 giá 2500
// 101 - 200 giá 3000
// 201 - 300 giá 4000
// 300 - 400 giá 5500
// từ 401 trở lên giá 7000
 var soTien;
if(soDien <= 50){
    soTien = soDien*2000;
}else if(soDien <= 100) {
    soTien = 50*2000 + (soDien-50)*2500;
}else if (soDien <= 200) {
    soTien = 50*2000 + 50*2500 + (soDien - 100)*3000;
}else if (soDien <= 300) {
    soTien = 50*2000 + 50*2500 + 100*3000+ (soDien - 200)*4000;
}else if(soDien <= 300) {
    soTien = 50*2000 + 50*2500 + 100*3000 + 100*4000 + (soDien - 300)*5500;
}else{
    soTien = 50*2000 + 50*2500 + 100*3000 + 100*4000 + 100*5500 + (soDien - 400)*7000;
}

console.log(soTien);

var userName = '1234567890';
var pass = 'tho12092000';

//username phải từ 8 - 16 ký tự nếu không thỏa mã thì thông báo user naem quá ngắn hoặc quá dài
//password >= 8 ký tự bếu không thỏa mãn thì thông báo pass quá ngắn
//nếu thỏa mãn cả 2 thì báo tạo tài khoản thành công

if(userName.length >= 8 && userName.length <= 16) {
    if(pass.length >= 8){
        console.log('Tạo tài khoản thành công');
    }else{
        console.log('Password của bạn quá ngắn');
    }
}else{
    console.log('user name của bạn quá ngắn hoặc quá dài');
}
var number = 0

switch(number){
    case 0:
        console.log('Đang tắt');
        break
    case 1:
        console.log('Đang bật');
        break
    default:
        console.log('Không hợp lệ');
}

//username phải từ 8 - 16 ký tự nếu không thỏa mã thì thông báo user naem quá ngắn hoặc quá dài
//password >= 8 ký tự bếu không thỏa mãn thì thông báo pass quá ngắn
//nếu thỏa mãn cả 2 thì báo tạo tài khoản thành công
//sử dụng switch case


// sử dụng đk true false

switch(userName.length < 8){
    case true:
        console.log('user name quá ngắn');
        break
    default:
        switch(userName.length > 16){
            case true:
                console.log('user name quá dài');
                break
            default:
                switch(pass.length > 8){
                    case true:
                        console.log('Tạo tài khoản thành công');
                        break
                    default:
                        console.log('Mật khẩu quá ngắn');
                }
        }
}

// không nên lồng nhiều tầng , sẽ khó đọc code có thể sử dụng lồng nhưng nên tối đa 3 tầng

// while
var number = 0;

while ( number < 10){
    console.log(number);
    number++;
}

// do while
number = 1000;
do {
    console.log(number);
    number++;
}while(number < 10)


var array = [3,5,7,9,5,1,6,7,8,5]
var n = 0; // start

while (n <array.length){ // stop
    console.log(array[n]); 
    n++; // speed
}

// lấy ra số chẵn trong array bỏ qua số lẻ
while (n <array.length){ // stop
    if(array[n]%2 == 0){
        console.log(array[n]);
    }
    n++;
}

// VÒng lặp for
array = [3,5,7,9,5,1,6,7,8,5]
for(var i = 0 ; i < 10 ; i++){
    console.log(i);
}

// tính tổng tất cả các phần tử trong array
var tong = 0;
for (var i = 0 ; i < array.length ; i++){
    tong = tong + array[i];
}
console.log(tong);

// biến thể của for
// for of

for (var data of array) {
    console.log(data);
}

// for in
var hocSinh = {
    ten: 'cuong',
    diemThi : {
        toan: 7,
        hoa: 5,
        ly: 6
    }
}

// tính tổng điểm và update tỏng điểm vào học sinh

var tongDiem = 0
for(var key in hocSinh.diemThi){
    tongDiem = tongDiem + hocSinh.diemThi[key];
}
console.log(tongDiem);
