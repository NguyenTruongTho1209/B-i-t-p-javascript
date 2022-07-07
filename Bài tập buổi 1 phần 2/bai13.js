/**
 * Bài 13 : 
var arr131 = [1,12,3,5,7,8,9,15,] ; 

var arr132 =  [7,2,3,5,3,8,9,15,2] ; 

a ) truy vấn đến phần tử đầu và cuối của 2 arr131 và arr132 .
b ) Đảo vị trí đầu và cuối của cả 2 array trên  . 
c ) Tính tổng (+) , hiệu(-) của các phần tử đã tìm được ở câu a . 
d ) thêm [7,9,11,13] vào arr131  , [1,5,7 ] vào arr132 .Truy vấn và tính tổng tất cả các phần tử  của arr131 con  và arr132  con . 
e ) Tính lại câu c .
 */

var arr131 = [1,12,3,5,7,8,9,15,]; 

var arr132 =  [7,2,3,5,3,8,9,15,2]; 

// a
console.log(`
Phần tử đầu của arr131 là : ${arr131[0]}
Phần tử cuối của arr131 là : ${arr131[arr131.length - 1]}
Phần tử đầu của arr132 là : ${arr132[0]}
Phần tử cuối của arr132 là : ${arr132[arr132.length - 1]}`);

// b
var a = arr131[0];
arr131[0] = arr131[arr131.length - 1];
arr131[arr131.length - 1] = a;

var b = arr132[0];
arr132[0] = arr132[arr132.length - 1];
arr132[arr132.length - 1] = b;

console.log(arr131 , arr132);

// c
var tong = arr131[0] + arr131[arr131.length - 1] + arr132[0] + arr132[arr132.length - 1];
var hieu = (arr131[0] + arr131[arr131.length - 1]) - (arr132[0] + arr132[arr132.length - 1]);

console.log(`
Tổng của các phần tử tìm được là : ${tong}
Hiệu của các phần tử tìm được là : ${hieu}`);

// d
arr131[arr131.length] = [7 , 9 , 11 , 13];
arr132[arr132.length] = [1 , 5 , 7];

var tongArr131 = arr131[arr131.length - 1][0] + arr131[arr131.length - 1][1] + arr131[arr131.length - 1][2] + arr131[arr131.length - 1][3] ;
var tongArr132 = arr132[arr132.length - 1][0] + arr132[arr132.length - 1][1] + arr132[arr132.length - 1][2] ;

console.log(tongArr131 , tongArr132);

// e
tong = arr131[0] + tongArr131 + arr132[0] + tongArr132;
hieu = (arr131[0] + tongArr131) - (arr132[0] + tongArr132);

console.log(`
Tổng của các phần tử tìm được là : ${tong}
Hiệu của các phần tử tìm được là : ${hieu}`);