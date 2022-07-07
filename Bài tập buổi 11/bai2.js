/**
 * 
Bài 2 :  

Áp dụng setIterval  , tạo một function có tác dụng giống với đồng hồ đếm ngược . 
Đầu vào số giây cần đếm ngược  .
nếu Người dùng cố tình nhập vào một số âm thì  in ra “ Hãy nhập số > 0 “ 
Nếu số giây đã đếm hết (tức số đếm hiện tại <= 0) thì hiển thị thông báo: Bạn đã hết giờ làm bài.
 Nếu số giây còn thì hiển thị số giây còn lại
 */

 function countDown (number){
    if(number < 0){
        console.log('Hãy nhập số lớn hơn 0');
    }
    let count = setInterval(function(){
        number = number - 1
        console.log(number);
        if(number == 0){
            console.log('Bạn đã hết thời gian làm bài');
            clearInterval(count)
        }
    }, 1000)

 }
countDown(5)