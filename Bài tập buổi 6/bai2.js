/**
 * // B2
var string = 'nguyen thanh tung' 
// hẫy viết hoa tất cả chữ cái đầu => 'Nguyen Thanh Tung'
 */

var string = 'nguyen thanh tung';

function updateString (input){
    var array = input.split(' ');
    var newString = array.map(function(value){
        return value.replace(value[0] , value[0].toUpperCase())
    })
    return newString.join(' ')
}

console.log(updateString(string));