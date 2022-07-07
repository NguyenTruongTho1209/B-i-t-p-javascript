/**
 * Bài 3  

Cho arr2 = [1,3,4,6,13,7,4,48,39] 
a ) Tìm phần tử lớn nhất và nhỏ nhất trong arr2
b )  Lấy ra số lẻ lớn nhất trong arr2 
 */

var arr3 = [1,3,4,6,13,7,4,48,39];

// a
// tìm max 
var max = 0;
var i = 0;
while(i < arr3.length){
    if(max < arr3[i]){
        max = arr3[i]
    }
    i++
}
console.log(21,'Phần tử lớn nhất trong array là : ' + max);

// tìm min
var min = max;
var i1 = 0;
while(i1 < arr3.length){
    if(min > arr3[i1]){
        min = arr3[i1]
    }
    i1++
}
console.log(32,'Phần tử nhỏ nhất tring array là : '+min);

// b
var maxLe = 0;
var n = 0;
while(n < arr3.length){
    if(arr3[n] % 2 !== 0){
        if(maxLe < arr3[n]){
            maxLe = arr3[n]
        }
    }
    n++
}
console.log(45, 'Phần tử lớn nhất là số lẻ trong mảng là : ' + maxLe);