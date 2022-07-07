/**
 * B2
var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]
// a , viết function có đầu vào là 2 array và return tổng 2 array đầu vào
// b , viết function có đầu vào là 2 array return array mới gộp 2 array với nhau và các phần tử sắp xếp tăng dần
 */
var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]

// a
function sumArray (input1 , input2){
    var array = [...input1,...input2]
    var sum = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;
    }
    return sum
}
console.log(21 , sumArray(list1 , list2));

// b
function sapXep (input1 , input2){
    var array = [...input1,...input2]
    array.sort(function(a , b){
        return a - b
    })
    return array
}
console.log(31 , sapXep(list1 , list2));