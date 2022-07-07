/**
 * 1
cho array ['le trung kien', 'vu huu quy', 'lam thanh hai']
hãy tạo ra array mới viết hoa tất cả chữ cái đầu tiên

 */
var array1 = ['le trung kien' , 'vu huu quy', 'lam thanh hai']

var newString = array1.map(function(value){
    var name = value.split(' ')
    var upperCaseName = name.map(function(value1){
        return value1.replace(value1[0] , value1[0].toUpperCase())
    }).join(' ')
    return upperCaseName
})
console.log(newString);