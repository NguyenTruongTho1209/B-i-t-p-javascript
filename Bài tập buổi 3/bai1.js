/**
 * B1 
a, Dùng vòng lặp for để in ra tổng các số lẻ trong array sau
b, Dùng vòng lặp for để in ra tích các số trong array 
var array = [1,9,3,7,6,4,5,2]
 */

var array = [1,9,3,7,6,4,5,2]

// a
function sumLe (input) {
    var tongLe = 0;
    for(var i = 0 ; i < input.length ; i++){
        if(input[i]%2 !== 0){
            tongLe = tongLe + input[i];
        }
    }
    return tongLe;
}

console.log(sumLe(array));

// b 
function sumChan (input) {
    var tongChan = 0;
    for(var i = 0 ; i < input.length ; i++) {
        if(input[i] % 2 == 0){
            tongChan = tongChan + input[i];
        }
    }
    return tongChan;
}

console.log(sumChan(array));