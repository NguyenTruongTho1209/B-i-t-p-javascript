/**
 * Thao tác với Array  

Bai 1 : 
Cho array sau  : 
var arr =[1,2,’Nam’,”Hải”,5,8, “Huy” ,3,6,”Nấm”] ;

a ) Truy vấn đến các phần tử có ví trí index (vị trí )là 0 ; 3 ;5 và in chúng ra bằng console.log . 
b ) Ghi đè phần tử có ví trí là 2 ,thành tên của bạn . và truy vấn và in kết quả ra bằng console.log . 
c ) Ghi đè phần tử có  thứ tự là 2 , thành số 100 . và truy vấn và in kết quả ra bằng console.log . 
d ) truy vấn phần tử cuối cùng và đầu tiên của Array và  sử dụng console.log in ra kết quả dưới dạng sau : 
“ Phần tử đầu tiên là … và phần tử cuối cùng là … “
 điền qua sau khi truy vấn vào dấu  …  .

 */

 var arr =[ 1 , 2 , 'Nam' , 'Hải' , 5 , 8 , 'Huy' , 3 , 6 , 'Nấm' ];

 // a
 console.log(arr[0]);
 console.log(arr[3]);
 console.log(arr[5]);

 // b
 arr[2] = 'Nguyễn Trường Thọ';
 console.log(arr[2]);

 // c
 arr[2] = 100;
 console.log(arr[2]);

 // d
 console.log('Phần tử đầu tiên là : ' + arr[0] +' '
 +'Phần tử cuối cùng là ' + arr[(arr.length - 1)]);