/**
 * 1 Viết function có đầu vào là 1 array
a, Function trả ra tổng các phần tử trong array
b, Function trả ra tích các phần tử trong array
 */

var array = [3,5,4,9,8,1,10];

// a
function sumArray(Array){
    var tong = 0
    for(var i = 0 ; i < Array.length ; i++){
        tong = tong + Array[i]
    }
    return tong;
}
console.log(sumArray(array));

// b
function tichArray(Array){
    var tich = 1
    for(var i = 0 ; i < Array.length ; i++){
        tich = tich * Array[i]
    }
    return tich;
}
console.log(tichArray(array));
