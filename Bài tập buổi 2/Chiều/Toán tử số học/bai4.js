/**
 * Bài 4 : 
Khai báo x ;y lần lượt là chiều dài và chiều rộng  của hình chữ nhật XYZT  
a ) tính chu vi của hình Chữ nhật XYZT 
b ) Tính diện tích của hình chữ nhật XYZT
c  ) Kiểm tra xem XYZT có phải hình vuông không ?
Nếu có thì tính chu vi và diện tích của hình Vuông trên . 

 */

var x = 4;
var y = 2;

// a
var chuVi = 2*(x + y);
console.log('Chu vi của hình chữ nhật là : ' + chuVi);

// b
var dienTich = a*b;
console.log('Diện tích của hình chữ nhật là : ' + dienTich);

// c

console.log(x == y ? 
    `Hình chữ nhật XYZT là hình vuông 
    Chu vi của hình chữ nhật XYZT là : ${4*x}
    Diện tích của hình chữ nhật là : ${x**2}` : 
    'Hình chữ nhật XYZT không phải hình vuông ' );

// sử dụng if else
if(x == y){
    console.log('Hình chữ nhật XYZT là hình vuông');
    chuVi = 4*x;
    dienTich = x**2;
    console.log(`
    Chu vi của XYZT là : ${chuVi}
    Diện tích của XYZT là : ${dienTich}`);
}else{
    console.log('Hình chữ nhật XYZT không phải là hình vuông');
}