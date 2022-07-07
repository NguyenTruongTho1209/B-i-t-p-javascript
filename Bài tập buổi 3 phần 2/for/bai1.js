/**
 * Bài 1 :  Sử dụng vòng lặp for 
cho  arr3 = [1,3,42,61,13,7,4,38,29] 
a ) tính tổng các phần tử trong arr3
b ) Tính Tích các phần tử trong arr3 
c ) Tìm số lớn nhất và nhỏ nhất trong arr3 
d ) có bao nhiêu số chẵn và bao nhiêu số lẻ trong arr3 
e ) Tìm ra số chẵn lớn nhất và số lẻ nhỏ nhất . 
 */

var array1 = [1,3,42,61,13,7,4,38,29] 

// a
var tong = 0
for(var i = 0 ; i < array1.length ; i++){
    tong = tong + array1[i]
}
console.log(18 , 'Tổng các phần tử trong mảng là : ' + tong);

// b
var tich = 1;
for(var i = 0 ; i < array1.length ; i++){
    tich = tich*array1[i]
}
console.log(25,'Tích các phần tủ trong mảng là : ' + tich);

// c
// tìm max
var max = 0;
for(var i = 0 ;i < array1.length ; i++){
    if(max < array1[i]){
        max = array1[i]
    }
}
console.log(35, 'Số lớn nhất trong mảng là : ' + max);

// tìm min
var min = max;
for(var i = 0 ; i < array1.length ; i++){
    if(min > array1[i]){
        min = array1[i]
    }
}
console.log(44, 'Số nhỏ nhất trong mảng là : ' + min);

// d
// đếm số chẵn
var demChan = 0
var demLe = 0
for(var i = 0 ; i < array1.length ; i++){
    if(array1[i]%2 == 0){
        demChan++
    }else{
        demLe++
    }
}
console.log(54, 'Số chẵn bên trong mảng là : ' + demChan);
console.log(55, 'Số lẻ bên trong mảng là : ' + demLe);

//e 
// số chẵn lớn nhất 
var maxChan = 0
for(var i = 0 ; i < array1.length ; i++){
    if(array1[i]%2 == 0){
        if(maxChan < array1[i]){
            maxChan = array1[i]
        }
    }
}

// số lẻ nhỏ nhất
var minLe = max;
for(var i = 0 ; i< array1.length ; i++){
    if(array1[i]%2 !== 0){
        if(minLe > array1[i]){
            minLe = array1[i]
        }
    }
}

console.log(81,'Số chẵn lớn nhất trong mảng là : ' + maxChan);
console.log(82,'Số lẻ nhỏ nhất trong mảng là : ' + minLe);