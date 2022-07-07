/**
 * Bài 2 :  
Cho array sau  : 
var arr2 =[6,2,'Dương',”Hải”,5,2, “Huy” ,3,6,”Nấm”,”Hải”] ;

a ) Truy vấn đến các phần tử có ví trí index (vị trí )là 4 ; 2 ;6 và in chúng ra bằng console.log . 
b ) Ghi đè cuối cùng ,thành tên của bạn . và truy vấn và in kết quả ra bằng console.log . 
c ) Ghi đè phần tử có  thứ tự là 2 , thành số tuổi của bạn . và truy vấn và in kết quả ra bằng console.log . 
d ) truy vấn phần tử cuối cùng và đầu tiên của Array và  sử dụng console.log in ra kết quả dưới dạng sau : 
“ Phần tử đầu tiên là … và phần tử cuối cùng là … “
 điền qua sau khi truy vấn vào dấu  …  .
e ) Đảo vị trí đầu và cuối của arr2
 */

var arr2 =[6,2,'Dương','Hải',5,2, 'Huy' ,3,6,'Nấm','Hải'] ;

// a
console.log(18 , arr2[4] , arr2[2] , arr2[6]);

// b
arr2[arr2.length - 1] = 'Thọ';
console.log(22 , arr2[arr2.length - 1]);

// c
arr2[1] = 22;
console.log(26 , arr2[1]);

// d
console.log(29 , `Phần tử đầu tiên là : ${arr2[0]} , Phần tử cuối cùng là : ${arr2[arr2.length - 1]}`);

// e
var a = arr2[0] ;
arr2[0] = arr2[arr2.length - 1];
arr2[arr2.length - 1] = a;

console.log(36 , arr2);