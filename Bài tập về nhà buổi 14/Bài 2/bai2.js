/**
 * Bài 2: Cho 2 ô input và 1 thẻ p nhưng không chứa text gì cả, 
 * khi người dùng nhập vào 2 ô input lấy giá trị của 2 ô đó 
 * rồi tính tổng 2 số rồi in giá trị tổng 2 số vào thẻ p.
 (gợi ý dùng val(), html() )
 */
let so1 = $('#so1')
let so2 = $('#so2')

let sum = 0 ;
function tinhTong(){
    sum = so1.val()*1 + so2.val()*1
    $('.header p').html(`<p>${sum}</p>`)
}
$('button').on('click' , tinhTong)
