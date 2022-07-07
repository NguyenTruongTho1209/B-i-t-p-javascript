// Bài 1 : 
// Cho ten = ['dao linh huong', 'tran ngoc diep', 'nguyen duy minh', 'dao minh nguyet', 'dao van anh']
// Cho thongTin = [
//     {ten: 'dao linh huong', ngaySinh:'02/28/1998'}
//     {ten: 'tran ngoc diep', ngaySinh:'02/12/1998'}
//     {ten: 'nguyen duy minh', ngaySinh:'02/03/1998'}
//     {ten: 'dao minh nguyet', ngaySinh:'02/20/1998'}
// ]
//a , Hãy in lại họ tên của những người trong array ten có chữ hoa ở đầu mỗi từ VD: Dao Linh Huong
//b , Hãy in lại thông tin ngày sinh của mỗi người trong bảng thông tin đang từ dạng mm/dd/yyyy thành dd/mm/yyyy
//c , Hãy sắp xếp lại data trong array thongTin theo thứ tự ngày sinh tăng dần 

var ten = ['dao linh huong', 'tran ngoc diep', 'nguyen duy minh', 'dao minh nguyet', 'dao van anh']

var thongTin = [
    {ten: 'dao linh huong', ngaySinh:'02/28/1998'},
    {ten: 'tran ngoc diep', ngaySinh:'02/12/1998'},
    {ten: 'nguyen duy minh', ngaySinh:'02/03/1998'},
    {ten: 'dao minh nguyet', ngaySinh:'02/20/1998'}
]

// a
var newName = ten.map(function(value){
    return stringName = value.split(' ')
})

var stringName = newName.map(function(value){
    var upperCaseName = value.map(function(value1){
        return value1.replace(value1[0] , value1[0].toUpperCase())
    })
    return upperCaseName.join(' ')
})
console.log(stringName);

// b
var fixBirthDay = thongTin.map(function(value){
    var birthDay = value.ngaySinh
    birthDay = birthDay.split('/')
    var temp = birthDay[0]
    birthDay[0] = birthDay[1]
    birthDay[1] = temp
    birthDay = birthDay.join('/')
    value.ngaySinh = birthDay
    return value
})
console.log(fixBirthDay);

// c
var sortBirthDay = fixBirthDay.sort(function(a , b){
    if(a.ngaySinh < b.ngaySinh){
        return -1
    }
})
console.log(sortBirthDay);