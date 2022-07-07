// var array6 = [3,2,4,1,8,7];

// function sapXep (input){
//     // xử lý input để trả ra output
//     for(var i = 0 ; i < input.length; i++){
//         for(var j = i + 1; j < input.length ; j++){
//             if(input[i] > input[j]){
//                 var tang = input[i];
//                 input[i] = input[j];
//                 input[j] = tang;
//             }
//         }
//     }
//     return input
// }

// console.log(sapXep(array6));

// function sum (number1 , number2){
//     return number1 + number2
// }

// var result = sum(100,200);

// console.log(result);

// function test () {
//     return 8888;
// }
// result = test();
// console.log(result);

// // viết function tính tổng các phần tử trong array

// var tong = 0;
// function sum (input){
//     for(var i = 0 ; i < input.length ; i++){
//         tong = tong + input[i];
//     }
//     return tong;
// }

// console.log(sum(array6));

// // viết function tính tích các phần tử trong array
// var tich = 1;

// function tichArray (input) {
//     for(var i = 0 ; i < input.length ; i++){
//         tich = tich * input[i];
//     }
//     return tich;
// }

// console.log(tichArray(array6));

// viết function tính tổng của 3 phần tử đầu tiên trong array

var array6 = [3,2,4,1,8,7];

function  sumFirstNumber(input){
    var tong = 0;
    for (var i = 0 ; i < 3 ; i++) {
            tong = tong + input[i]
    }

    return tong
}

console.log(sumFirstNumber(array6));
// viết function tính tổng 3 phần tử cuối trong array

function sumLastNumber (input) {
    var tong = 0;
    for (var i = 0 ; i < 3 ; i++) {
        tong = tong + input[input.length - ( i + 1)];
    }
    return tong
}

console.log(sumLastNumber(array6));