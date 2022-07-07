/**
 * 
Bài 4 var array = [1,9,3,7,6,4,5,2]
a, Hãy lấy ra số lớn nhất trong array
b, Hãy lấy ra số chẵn nhỏ nhất trong array

 */
array4 = [1,9,3,7,6,4,5,2]

// a
var max = 0;
for(var i = 0 ; i < array4.length ; i++){
    if(max < array4[i]){
        max = array4[i]
    }
}

console.log('Số lớn nhất trong array là : ' + max);

// b
var min = max;
for(var i = 0 ; i < array4.length ; i++){
    if(array4[i] % 2 == 0) {
        if ( min > array4[i]){
            min = array4[i];
        }
    }
}
console.log('Số chẵn nhỏ nhất trong array là : ' + min);