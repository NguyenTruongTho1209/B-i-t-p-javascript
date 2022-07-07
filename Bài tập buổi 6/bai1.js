/**
 * // B1
var arr = ['thai', 'linh', 'tung', 'quan', 'khang']
// hạy tạo danh sách có tên viết hoa chữ đầu [‘Thai’,’Linh’,...]
 */

var array1 = ['thai', 'linh', 'tung', 'quan', 'khang'];

function fixString (input){
    var string = input.map(function(value){
        return value.replace(value[0] , value[0].toUpperCase())
    })
    return string
}
console.log(fixString(array1));