/**
 * // Bài 1: 
Cho str1 = 'Ngay moi vui ve'
a , dùng .include để kiểm tra xem vui có trong câu trên không
b , Hãy tách các từ trong str1 và in trong 1 array mới kết quả yêu cầu ['Ngay', 'moi', 'vui', 've']
c , Hãy viết hoa chữ cái đầu và in lại kết quả yêu cầu 'Ngay Moi Vui Ve'
d , Hãy thay vui thanh VUI gợi ý dùng replace
e , Hãy lấy ký tự tại vị trí thứ 4
f , Hãy in lại str1 thành 'vui ve Ngay moi'

 */

var string1 = 'Ngay moi vui ve'

// a
var findString = string1.includes('vui')
console.log(17 , findString);

// b
var array = string1.split(' ')
console.log(21 , array);

// c
    var newString = array.map(function(value){
        return value.replace(value[0] , value[0].toUpperCase())
    })
console.log(newString.join(' '));

// d
for (let i = 0; i < array.length; i++) {
    if(array[i] === 'vui'){
        array[i] = array[i].toUpperCase()
    }
}
console.log(array.join(' '));

// e
var kiTu = string1[3]
console.log(39 , kiTu);

// f
