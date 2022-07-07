let active = 1
let totalPage = 7
let listData = []
let pageSize = 10



changePage()
function changePage(){
    $('button').css({color: 'black' , background: 'none'})
    $(`.page${active}`).css({color:'white' ,background: 'aquamarine'})
    let showDate = listData.slice((active -1 ) * pageSize , active*pageSize)
    render(showDate)
}

function down(){
    if (active === 1){
        active = totalPage 
    }else{
        active--
    }

    changePage()
}

function up(){
    if(active === totalPage ) {
        active = 1
    }else{
        active++
    }

    changePage()
}

changePage()

function page(){
    $('.listBtn').html('')
    totalPage = Math.ceil(listData.length / pageSize)

    for (let i = 1; i <= totalPage; i++) {
        $('.listBtn').append(`
        <button class='page${i}'>${i}</button>`)
        $(`.page${i}`).on('click' , function(){
            active = i
            changePage()
        })
    }
    changePage()
}

function getData(){
    $.ajax({
        url: 'https://www.nodemy.vn/api/bootcamp-1-s' ,
        type: 'GET'
    }).then(function(data){
        listData = data
        render(data)
        page()
    }).catch(function(err){
        console.log(err);
    })
}
getData()

// render(listData)

// let giaTri = choseListData.options[choseListData.selectedIndex].text;
// console.log(giaTri);
function render(data){
    $('.listData').html('')
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        $('.listData').append(`<div class = 'dataItem'>
        <h2> Số thứ tự : ${i + 1}</h2>
        <p>Price :${element.Price}</p>
        <p>ProductName :${element.ProductName}</p>
        <p>Storage :${element.Storage}</p>
        <p>createdAt$ :{element.createdAt}</p>
        <p>id :${element.id}</p>
        <p>published_at :${element.published_at}</p>
        <p>updatedAt :${element.updatedAt}</p>
        <p>__v :${element.__v}</p>
        <p>_id :${element._id}</p>
        </div>`)
    }
}

$('#choseList').on('change' , function(){
    let value = $('#choseList').val()
    pageSize = value
    page()
})

console.log(window.localStorage);