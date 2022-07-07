/**
 * Bài 6 : 
Khai báo biến x với giá trị mà người dùng nhập vào . 
Sử dụng toán tử ba ngôi để thông báo cho người dùng biết số đó lớn hơn , nhỏ hơn hoặc bằng 20 hay không  .. 

 */
var x = 5;
console.log(x > 20 ? `${x} lớn hơn 20` : (x < 20 ? `${x} nhỏ hơn 20` : `${x} bằng 20`));

// sử dụng if else
if(x > 20){
    console.log(`${x} lớn hơn 20`);
}else if(x < 20) {
    console.log(`${x} nhỏ hơn 20`);
}else{
    console.log(`${x} bằng 20`);
}