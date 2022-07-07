// khởi tạo giá trị
var age = 20;

// gán lại giá trị
age = 21;
// in ra giá trị
console.log(age);

var userName = 'truongtho';

console.log(userName);

var chat = `huy nói: "xin chào anh em"
thai tra loi: "hi" ${1 + 1}`

console.log(chat);

var nv1 = 'Nam';
var nv2 = 'Lâm';

chat = `
${nv1} nói: "Xin chào anh em"
${nv2} trả lời: "hi"
${nv1} nói: "Bài tập ok chứ"
${nv2} trả lời: "ok"
`
console.log(chat);

var user = {
    name: 'Tho',
    tuoi: 20,
    password: 'Tho12092000',
    phone: '01234556',
    address: 'Hà Nội'
}

// truy vấn key trong object
console.log(user.name);
// chỉnh sửa value của key trong object
console.log(39, user);
user.tuoi = 21;
console.log(41,user);

user.phone = '0339951231';
console.log(user);

console.log(46 , user['name']);
user['tuoi'] = user['tuoi'] + 1;

console.log(user);

var key = 'tuoi';
console.log(user[key]);

// thêm mới 
user.id = 1;
console.log(user);

// Xóa 
delete user.password;
console.log(user);

delete user.id;
console.log(user);

var list = ['kien' , 'nam' , 'trung'];

console.log(list[0]);

list[0] = 'Tho';
console.log(list[0]);

list[3] = 'Phuoc';
console.log(list);

list.length = 2

console.log(list);

list.length = 6
console.log(list);
// trả về vị trí cuối cùng bằng length
console.log(list[list.length - 1]);

console.log(Object.keys(list));
var user = {
    name: 'Tho',
    age:20
}
console.log(user);
console.log(Object.keys(user));

var list2 = {
    0: 'kiên',
    1: 'nam',
    2: 'trung'
}
console.log(user['name']);
console.log(list2[0]);

