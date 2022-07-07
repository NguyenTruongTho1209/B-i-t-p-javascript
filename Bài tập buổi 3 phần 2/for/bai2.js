/**
 * Bài 2 :  
cho arr4 =   [1,3,2,13,5,7,4,38,29] 
a ) sắp xếp arr4 theo thứ tự tăng dần 
b ) sắp xếp arr4 theo thứ tự giảm dần 
 */

array2 = [1,3,2,13,5,7,4,38,29];

// a
var arrayTang = 0
for(var i = 0 ; i < array2.length ; i++){
    for(var j = i + 1 ; j < array2.length ; j++){
        if(array2[i] > array2[j]){
            arrayTang = array2[i];
            array2[i] = array2[j];
            array2[j] = arrayTang;
        }
    }
}
console.log(21 , 'array sau khi sắp xếp theo thứ tự tăng dần là : ' + array2);

// b
var arrayGiam = 0
for(var i = 0 ; i < array2.length ; i++){
    for(var j = i + 1 ; j < array2.length ; j++){
        if(array2[i] < array2[j]){
            arrayGiam = array2[i];
            array2[i] = array2[j];
            array2[j] = arrayGiam;
        }
    }
}
console.log(34 , 'array sau khi sắp xếp theo thứ tự giảm dần là : ' + array2);