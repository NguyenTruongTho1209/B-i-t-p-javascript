/**
 * 4,
Cho biến button là 1 string và Biến page là 1 số nguyên từ 1 đến 10
Nếu biến button = ‘next’ thì page tăng 1 đơn vị
Nếu biến button = ‘prev’ thì page giảm 1 đơn vị
Nếu button nhận giá trị từ 1-10 thì page nhận giá trị tương tự
Nếu page = 10 và button = ‘next’ thì page vẫn = 10
Nếu page = 1 và button = ‘prev’ thì page vẫn = 1

 */
var page   = 10;
var button = 'next';

console.log(page = 10 && button == 'next' ? page = 10: 
(page = 1 && button == 'prev' ? page = 1 : 
(button <= 10 && button >= 1 ? page = button : 
(button == 'next' ? ++page :
(button == 'prev' ? --page: 0)))));

// sử dụng if else

if(button == 'next') {
    if(page == 10){
        console.log(page);
    }else{
        console.log(++page);
    }
}else if (button == 'prev'){
    if(page == 1){
        console.log(page);
    }else{
        console.log(--page);
    }
}

