/**
 * B2 
var array = [1,9,3,7,6,4,5,2]
a, Hãy lấy ra số lơn nhất trong array
b, Hãy lấy ra số chẵn nhỏ nhất trong array
 */

var array = [1,9,3,7,6,4,5,2];

// a
var max = 0;
function maxArray(input) {
    for(var i = 0 ; i < input.length ; i++){
        if(max < input[i]){
        max = input[i]
        }
    }
return max;
}
var result = maxArray(array)

console.log(result);

// b
function minArray(input) {
    var min = max;
    for(var i = 0 ; i < input.length ; i++){
        if(input[i]%2 == 0) {
            if(min > input[i]){
                min = input[i];
            }
        }
    }
    return min;
}

console.log(minArray(array));