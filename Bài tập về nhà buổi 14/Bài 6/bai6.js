/**
 *  tạo giao diện có button chứa các số từ 1 - 5 và 2 button chứa chữ next và prev
Trong đó nút có số 3 hiện màu xanh, các nút còn lại màu trắng 

a, Khi ấn next thì nút tiếp theo hiện màu xanh, các nút còn lại hiện màu trắng
Khi đã đến nút số 5 thì không ấn next được nữa 
Khi ấn prev thì nút trước đó hiện màu xanh, các nút còn lại hiện màu trắng
Khi đã đến nút số 1 thì không ấn prev được nữa

b, 
khi đang ở nút 5 mà ấn next thì quay về 1
khi đang ở nút 1 mà ấn prev thì lên nút 5

 */
let active = 0
let totalPage = 5

for (let i = 0; i < totalPage; i++) {
    $('.listBtn').append(
        `<button class='page${i}'>${i + 1}</button>`
    )
    $(`.page${i}`).on('click' , function(){
        active = i
        changePage()
    })
}

changePage()
function changePage(){
    $('button').css({color: 'black' , background: 'none'})
    $(`.page${active}`).css({color:'white' ,background: 'aquamarine'})
}

function down(){
    if (active === 0){
        active = totalPage -1
    }else{
        active--
    }

    changePage()
}

function up(){
    if(active === totalPage - 1) {
        active = 0
    }else{
        active++
    }

    changePage()
}