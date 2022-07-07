/**
 * Bài 3: Viết 1 trang html có 2 ô input để người dùng nhập số, 
 * khi người dùng nhập xong thì in ra số lớn nhất trong 2 ô vừa nhập.
 */

 let so1 = $('#so1')
 let so2 = $('#so2')

 function findMax(){
    if(so1.val() > so2.val()){
        $('p').html(`<p>${so1.val()}</p>`)
    }else{
        $('p').html(`<p>${so2.val()}</p>`)
    }
 }

$('button').on('click' , findMax)