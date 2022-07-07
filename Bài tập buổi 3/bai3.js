/**
 * B3 
var array = [1,9,3,7,6,4,5,2]
Hãy sắp xếp array trên theo thứ tự ngược lại
 */

var array = [1,9,3,7,6,4,5,2];

function reverseArray(input) {
    var reverse = 0;
    for(var i = 0 ; i < (input.length/2) ; i++){
        reverse = input[i];
        input[i] = input[input.length - (i + 1)];
        input[input.length - (i + 1)] = reverse;
    }
    return input;
}

var result = reverseArray(array);
console.log(result);