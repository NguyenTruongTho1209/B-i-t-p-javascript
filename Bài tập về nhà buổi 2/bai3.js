/**
 * 3,
Cho biến password là 1 string bất kỳ
Nếu password để trống thì in ra ‘password không để trống’
Nếu password nhỏ hơn 8 ký tự hoặc password dài hơn 16 ký tự thì in ra ‘password k hợp lệ’
Nếu không bị những lỗi trên thì in ra password hợp lệ 

 */

var password = '';

password == '' ? 'password không để trống' : 
(password.length < 8 || password.length > 16 ? 'password không hợp lệ' : 'password hợp lệ');

// sử dụng if else

if (password == ''){
    console.log('password không thể trống');
}else if (password.length < 8 || password.length > 16 ) {
    console.log('password không hợp lệ');
}else{
    console.log('password hợp lệ');
}