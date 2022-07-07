/**
 * B5

var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]
// viết function có đầu vào là 2 array và return tổng 2 array đầy vào
// viết function có đầu vào là 2 array return array mới gộp 2 array với nhau và các phần tử sắp xếp tăng dần
 */
var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]
var array = [...list1 , ...list2]
var tong = 0

// a
array.map(function(value){
    tong += value
    return tong
})
console.log(tong);

// b
array.sort(function(after , before) {
    if(before > after){
        return -1
    }
})
console.log(array);

