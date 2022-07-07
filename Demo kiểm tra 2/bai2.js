/**
 * Bài 2 : 
Cho arr2 = [1,3,4,6,13,7,4,48,39 ,8,54] 
a ) Đảo ngược arr2 .
b) Tìm phần tử lớn nhất và nhỏ nhất trong arr2
c )  Lấy ra số lẻ lớn nhất trong arr2  .Lấy ra phần tử chẵn lớn nhất  
 */

var array2 = [1,3,4,6,13,7,4,48,39 ,8,54] 

// a
var daoNguoc = array2.reverse()
console.log(13, daoNguoc);

// b
function findMax (input){
    return Math.max(...input)
}
console.log( 19 , findMax(array2));

// c
var arrayLe = [];
var arrayChan = []
for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if(element % 2 !== 0){
        arrayLe.push(element)
    }else{
        arrayChan.push(element)
    }
}
console.log(findMax(arrayLe));
console.log(findMax(arrayChan));