/**
 * Bài 2  :  Áp dụng vòng lặp while 

Cho arr1 = [1,2,4,6,3,7,4,8,9]

a ) Tính tổng các phần tử trong arr1
b ) Tính tích các phần tử trong arr1 
c ) Tính tổng  và  tích các số chẵn trong arr1 
d ) Đếm xem có bao nhiêu số chẵn và số lẻ trong Arr1 

 */
var arr1 = [1,2,4,6,3,7,4,8,9];

// a
var tong = 0;
var i = 0;
while (i < arr1.length){
    tong = tong + arr1[i]
    i++
}
console.log(21,tong);

// b
var tich = 1;
var n = 0
while(n < arr1.length){
    tich = tich * arr1[n]
    n++
}
console.log(30,tich);

// c
// tổng các số chẵn trong array
var tongChan = 0
var i1 = 0
while(i1 < arr1.length){
    if(arr1[i1]%2 == 0){
        tongChan = tongChan + arr1[i1]
    }
    i1++
}
console.log(42,tongChan);

// tích các số chẵn teong array
var tichChan = 1;
var n1 = 0
while(n1 < arr1.length){
    if(arr1[n1]%2 == 0){
        tichChan = tichChan * arr1[n1]
    }
    n1++
}
console.log(52,tichChan);

//d
// đếm số chẵn
var demChan = 0
var x = 0
while(x < arr1.length){
    if(arr1[x] % 2 == 0){
        demChan++
    }
    x++;
}
console.log(65,'Số phần tử là số chẵn trong array là : ' + demChan);

// đếm số lẻ 
var demLe = 0
var x1 = 0
while(x1 < arr1.length){
    if(arr1[x1] % 2 !== 0){
        demLe++
    }
    x1++
}
console.log(76,'Số phần tử là số lẻ trong array là : ' + demLe);
