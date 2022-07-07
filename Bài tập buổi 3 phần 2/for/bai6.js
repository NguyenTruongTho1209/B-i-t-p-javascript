/**
 * Bài 6 :  Cho array sau  : 
var arr6 =  [1,13,2,6,4,8];

a ) Tính tổng ,hiệu, tích , chia , tất cả các phần tử trong arr6 . 
b ) Sắp xếp arr6 theo thứ tự tăng dần và giảm dần

 */

var array6 =  [1,13,2,6,4,8];

// a
var tong = 0 , hieu = 0;
var tich = 1 , thuong = 1;
for(var i = 0 ; i < array6.length ; i++){
    tong += array6[i];
    hieu -= array6[i];
    tich *= array6[i];
    thuong /= array6[i]
}
console.log(tong);
console.log(hieu);
console.log(tich);
console.log(thuong);

// b
// tăng dần
for(var i = 0 ; i < array6.length ; i++){
    for(var j = i + 1; j < array6.length ; j++){
        if(array6[i] > array6[j]){
            var tangDan = array6[i];
            array6[i] = array6[j];
            array6[j] = tangDan;
        }
    }
}
console.log(array6);

for(var i = 0 ; i < array6.length ; i++){
    for(var j = i + 1; j < array6.length ; j++){
        if(array6[i] < array6[j]){
            var giamDan = array6[i];
            array6[i] = array6[j];
            array6[j] = giamDan;
        }
    }
}
console.log(array6);