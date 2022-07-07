/**
 * Bài 3: cho var data = [3,2,4,'5',1,8,7,'9']
a, tính tổng các phần tử trong array trên
b, hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data
c, hãy tạo ra array3 chứa các phần tử của data theo thứ tự đảo ngược 
// kết quả [ '9', 7, 8, 1, '5', 4, 2, 3]
 */

var array3 = [3,2,4,'5',1,8,7,'9'];

// a
var tong = 0;
for (var i = 0 ; i < array3.length ; i++){
    tong += parseInt(array3[i]);
}
console.log('Tổng các phần tử trong array là : ' + tong);

// b
var array2 = [];
for(var i = 0 ; i < array3.length ; i++){
    if(array3[i] % 2 !== 0){
        array2[array2.length] = array3[i];
    }
}
console.log(array2);

// c
var dao ;
for(var i = 0 ; i < (array3.length/2) ; i++){
    dao = array3[i];
    array3[i] = array3[array3.length - (i + 1)];
    array3[array3.length - (i + 1)] = dao;
}
console.log(array3);
