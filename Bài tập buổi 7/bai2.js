/**
 * // Bài 2: 
a ,Viết 1 function có giá trị đầu vào là a và b và trả ra kết quả là a mũ b
b ,Viết 1 function có giá trị đầu vào là c và trả ra kết quả là c căn bậc 2 
Cho array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
c ,Dùng toán tử để viết 1 function xuất ra giá trị lớn nhất và nhỏ nhất của dãy 
Và viết function và xuất ra số trung bình cộng của dãy (lưu ý giá trị của trung bình cộng thì làm tròn)
 */

var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
// a
function tinhSoMu (a , b){
    return Math.pow(a , b)
}

console.log(16 , tinhSoMu(4 , 2));

// b
function tinhCanBac (c){
    return Math.sqrt(c)
}
console.log(22 , tinhCanBac(9));

// c
function findMin (input){
    return Math.min(...input)
}

function findMax (input){
    return Math.max(...input)
}
console.log(32 , findMax(array1));
console.log(33 , findMin(array1));
// d
function trungBing (input){
    var tong = 0;
    for(var i = 0 ; i < input.length ; i++){
        tong += input[i]
    }
    return Math.round(tong/input.length)
}
console.log(42 , trungBing(array1));

