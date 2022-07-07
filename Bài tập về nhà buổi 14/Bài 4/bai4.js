/**
 * Bài 4: 
Tạo button dark khi click thì body nền đen chữ trằng
tạo button white khi click thì body nền trắng chữ đen

Tạo button changeMode khi click thì body đổi nền đen chữ trằng
click lần nữa thì body nền trắng chữ đen 
2 trạng thái thay thế cho nhau mỗi lần click changeMode
 */

let dark = $('#dark')
let white = $('#white')
let changeMode = $('#changeMode')
function darkTheme(){
    $('body').css({'background': 'black' , 'color':'white'})
}

function nomarTheme(){
    $('body').css({'background': 'white' , 'color':'black'})
}
dark.on('click' , darkTheme)
white.on('click' , nomarTheme)

changeMode.on('click' , darkTheme).dblclick('click', nomarTheme)
