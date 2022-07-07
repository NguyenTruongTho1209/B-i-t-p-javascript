/**
 * bài 1: cho 1 thẻ p có nội dung là xin chào nodemy, và 1 nút button
thực hiện sự kiện click của nút button thì đoạn text của thẻ p sẽ đổi thành nodemy xin chào các bạn
 */

function thayDoi (){
    $('p').html(`<p>nodemy xin chào các bạn</p>`)
}

$('button').on('click' , thayDoi)