/**
 * B4:
cho array persons 
[{
	name: 'Trung',
	class: 'Nodemy01',
	dateJoin: '05-02-2020',
age: 20
}, {
	name: 'Phong',
class: 'Nodemy01',
dateJoin: '06-01-2020',
age: 19
}, {
	name: 'Nam',
class: 'Nodemy02'
dateJoin: '25-01-2020',
age: 20
}]

4.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
4.3 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
4.2 dùng .filter để tìm ra những học viện tham gia trước tháng 2
4.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 

 */
var persons =
[{
	name: 'Trung',
	class: 'Nodemy01',
	dateJoin: '05-02-2020',
    age: 20
}, {
	name: 'Phong',
    class: 'Nodemy01',
    dateJoin: '06-01-2020',
    age: 19
}, {
	name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25-01-2020',
    age: 20
}]

// 4.1
var agePerson = persons.sort(function(a , b){
    if(a.age < b.age){
        return -1
    }
})
console.log(agePerson);

// 4.2
var dateJoinPersons = persons.sort(function(a , b){
    if(a.dateJoin > b.dateJoin){
        return -1
    }
})
console.log(dateJoinPersons);

// 4.3
var timeJoin = persons.map(function(value){
    var date = value.dateJoin.split('-');
    value.dateJoin = {ngay: date[0] , thang:date[1] , nam:date[2]}
    return value
})

console.log(timeJoin);

var monthJoin = timeJoin.filter(function(value){
    if(value.dateJoin.thang < 2){
        return true
    }
})
console.log(75 , monthJoin);

// 4.4
var updateNamePerson = persons.map(function(value){
    value.name = value.name.toUpperCase()
    return value
})
console.log(81 , updateNamePerson);