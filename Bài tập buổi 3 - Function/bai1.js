/**
 * Bài 1 : Một function với đầu vào là một Array  .với giá trị là các số nguyên .   
a )  in ra tổng các phần tử của Array  
b ) Tìm giá trị Min và Max của Array đó . 
c ) Tính trung bình cộng của array đó
 */

var array1 = [1,9,3,7,6,4,5,2];
// a
function tinhTong (input){
    var tong = 0;
    for(var i = 0 ; i < input.length ; i++){
        tong = tong + input[i];
    }
    return tong;
}

console.log(tinhTong(array1));

// b
// tìm max

function timMax (input){
    var max = 0;
    for(var i = 0 ; i < input.length ; i++){
        if(max < input[i]){
            max = input[i]
        }
    }
    return max ;
}

console.log(timMax(array1));

// tìm min
function timMin (input){
    var min = 10;
    for(var i = 0; i < input.length ; i++){
        if(min > input[i]){
            min = input[i]
        }
    }
    return min ;
}
console.log(timMin(array1));

// c
function timTB (input) {
    var tongTB = 0;
    for(var i = 0 ; i < input.length ; i++){
        tongTB = tongTB + input[i];
    }
    tongTB = tongTB/input.length
    return tongTB;
}
console.log(timTB(array1));