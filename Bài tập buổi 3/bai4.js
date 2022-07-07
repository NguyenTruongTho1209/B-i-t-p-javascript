/**
 * B4 Dùng vòng lặp for để sắp xếp array sau theo thứ tự tăng dần và giảm dần
var array = [1,9,3,7,6,4,5,2]
 */

var array = [1,9,3,7,6,4,5,2];

// sắp xếp tăng dần
function sortArrTang(input){
    var sortTang = 0;
    for(var i = 0 ; i < input.length ; i++){
        for(var j = i + 1; j < input.length ; j++){
            if(input[i] > input[j]){
                sortTang = input[i];
                input[i] = input[j];
                input[j] = sortTang;
            }
        }
    }
    return input;
}

var arrayTang = sortArrTang(array);
console.log(arrayTang);

// sắp xếp giảm dần
function sortArrGiam(input){
    var sortGiam = 0;
    for(var i = 0 ; i < input.length ; i++){
        for(var j = i + 1; j < input.length ; j++){
            if(input[i] < input[j]){
                sortGiam = input[i];
                input[i] = input[j];
                input[j] = sortGiam;
            }
        }
    }
    return input;
}

var arrayGiam = sortArrGiam(array);
console.log(arrayGiam);