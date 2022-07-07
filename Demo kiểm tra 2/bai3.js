/**
 * Bài 3 :
viết function có đầu vào là 1 string
Thay thế tất cả dấu cách ' ' trong string bằng dấu '-' và trả ra string mới 
 */

function thayThe (string){
    var arrayString = string.split(' ')
    return arrayString.join('-')
}
console.log(thayThe('Nguyen Truong Tho'));