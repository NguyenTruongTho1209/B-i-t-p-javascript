// Bài 6: 
// Cho array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]
// -) Hãy viết 1 funtion in ra dãy các số nguyên tố và vị trí của nó trong array  
// -) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array
// -) Viết funtion để tính tích của các số nguyên tố trong dãy array 
var array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]

// a
function checkNumber ( input){
    for(var i = 0 ; i < input.length ; i++){
        var count = 0
        for(var j = 0 ; j <= input[i] ; j++){
            if(input[i]%j == 0){
                count++
            }
        }
        if(count <= 2 ){
            console.log(`Số ${input[i]} là số nguyên tố , tại vị trí ${i} trong array`);
        }
    }
}
checkNumber(array);

// b
function sumNumber (input){
    var sum = 0;
    var sumArray = 0
    var trungBinh = 0;
    for(var i = 0 ; i < input.length ; i++){
        var count = 0
        for(var j = 0 ; j <= array[i] ; j++){
            if(input[i]%j == 0){
                count++
            }
        }
        if(count <= 2 ){
            sum = sum + input[i]
        }
        sumArray = sumArray + input[i]
    }
    trungBinh = sumArray/input.length

console.log(`Tổng các số nguyên tố trong array là : ${sum} 
Trung bình cộng của các số trong array là : ${trungBinh}`);
}

sumNumber(array)

// c
function tichArray (input){
    var tich = 1;
    for(var i = 0 ; i < input.length ; i++){
        var count = 0
        for(var j = 0 ; j <= array[i] ; j++){
            if(input[i]%j == 0){
                count++
            }
        }
        if(count <= 2 ){
            tich = tich*input[i]
        }
    }
    return tich
}
console.log(tichArray(array));