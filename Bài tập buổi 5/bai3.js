/**
 * B3 :

const persons = [

  {firstname : "Đào", lastname: "Văn Anh"},

  {firstname : "Trần", lastname: "Huy"},

  {firstname : "Lê", lastname: "Hoàng"}

];

a ) Tạo ra một array persons mới . (newPersons)

a ) Thêm {firstname : "Điền họ của bạn…", lastname: "Điền họ của ban …."} vào cuối Array newPersons.

b)Xóa {firstname : "Trần", lastname: "Huy"}, và Đổi thành

{firstname : "Nguyễn", lastname: "Hoàng"}.

c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array newPersons
 */

const persons = [
    {firstname : "Đào", lastname: "Văn Anh"},
    {firstname : "Trần", lastname: "Huy"},
    {firstname : "Lê", lastname: "Hoàng"}
  ];

  // a
var newPersons = [...persons , {firstname : "Nguyễn", lastname: "Trường Thọ"}]
console.log(newPersons);

// b
newPersons.splice(1 , 1 , {firstname : "Nguyễn", lastname: "Hoàng"})
console.log(newPersons);

// c
newPersons.map(function(value) {
    value.address = 'Hà Nội'
    return value
})

console.log(newPersons);