/**
 * Bài 4  

Khai  báo biến a và b với giá trị số mà người dùng nhập nhập vào . 
So sánh 2 số a và b rồi in ra kết quả .( lớn hơn , nhỏ hơn , bằng ) 
lưu ý : a và b  là số nguyên

 */
var a = 2 ;
var b = 1 ;

console.log(a > b ? 'a lớn hơn b ' : ( a < b ? 'a nhỏ hơn b' : ( a == b ? 'a bằng b' :  0)));

// sử dungj if else

if(a > b) {
    console.log('a lớn hơn b');
}else if (a < b) {
    console.log('a nhỏ hơn b');
}else{
    console.log('a bằng b');
}