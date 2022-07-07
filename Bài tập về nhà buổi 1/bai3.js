/**
 * cho object user = {
	ten: ‘tung’,
	tuoi: 20
	banBe:[‘vy’,’tung’,’tuan’]
	diaChi:{
tinh: ‘HCM’,
quan:’Q1’
}
}
a, in ra array bạn bè
b, người bạn cuối cùng tên là gì
c, in ra object dia chi của user
d, hãy tạo string giới thiệu bản thân cho object user trên theo mẫu sau
‘tên tôi là …, tôi .. tuổi, tôi ở … tỉnh …’
e, hãy thêm đường = ‘nguyễn tuân’ vào địa chỉ của user
f, hãy thêm ‘thai’ vào danh sách bạn của user
 */

var user = {
    ten: 'tung',
    tuoi: 20,
    banBe: ['vi' , 'tung' , 'tuan'],
    diaChi: {
        tinh: 'HCM',
        quan: 'Q1'
    }
}

// a
console.log(user.banBe);

// b
console.log(user.banBe[user.banBe.length - 1]);

// c
console.log(user.diaChi);

// d
console.log(`tên tôi là ${user.ten}, tôi ${user.tuoi} tuổi, tôi ở ${user.diaChi.quan} tỉnh ${user.diaChi.tinh}`);

// e
user.diaChi.duong = 'Nguyễn Tuân';

// f
user.banBe[user.banBe.length] = 'thai';
console.log(user.banBe);

