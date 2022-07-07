/**
 * // B3
var date = ‘15/10/2022’
hãy tạo ra string mới có thứ tự ngược lại (‘2022/10/15’)
 */

var date = '15/10/2022'
var string = date.split('/')
var newString = string.reverse()
console.log(newString.join('/'));