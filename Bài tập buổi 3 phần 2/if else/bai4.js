/**
 * Bài 4 
Cho arr4  = [1,2,5,10,3,7,4,8,9,25];

a ) In ra các số chia hết cho 5 . 
b ) In ra các số chẵn  và số lẻ trong arr4 
c ) in ra các số .>  9 trong arr4
 */
var arr4  = [1,2,5,10,3,7,4,8,9,25];

// a
function array5(input){
    for(var i = 0 ; i < input.length ; i++){
        if(input[i] % 5 == 0){
            console.log(15 , input[i]);
        }
    }
}

array5(arr4);

// b
function arrayChan(input){
    for(var i = 0 ; i < input.length ; i++){
        if(input[i]% 2 == 0){
            console.log(26 , input[i]);
        }
    }
}
function arrayLe(input){
    for(var i = 0 ; i < input.length ; i++){
        if(input[i] % 2 !== 0){
            console.log(33 , input[i]);
        }
    }
}

arrayChan(arr4);
arrayLe(arr4);

// c
function lonHonChin(input){
    for(var i = 0 ; i < input.length ; i++){
        if(input[i] > 9){
            console.log(45 , input[i]);
        }
    }
}

lonHonChin(arr4);

