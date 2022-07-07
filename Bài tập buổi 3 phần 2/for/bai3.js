/**
 * Bài 3 
var array = [1,9,3,7,6,4,5,2]
a, Dùng vòng lặp for để in ra tổng các số lẻ trong array sau
b, Dùng vòng lặp for để in ra tích các số trong array
 */

var array3 = [1,9,3,7,6,4,5,2];

// a 
var tongLe = 0;
for(var i = 0 ; i < array3.length ; i++){
    if(array3[i]%2 !== 0){
        tongLe += array3[i]
    }
}
console.log(17 , 'Tổng các số lẻ trong array là : ' + tongLe);

// b
var tich = 1;
for(var i = 0 ; i < array3.length ; i++){
    tich = tich*array3[i]
}

console.log(25,'Tích các phần tử trong array là : ' + tich);