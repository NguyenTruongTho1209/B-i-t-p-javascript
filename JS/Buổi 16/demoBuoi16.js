

let data = window.localStorage.getItem('test')

if(!data){
    window.localStorage.setItem('test' , '[]')
    data = []
}else{
    data = JSON.parse(data)
}
var index = 0

function add(){
    const username = $('#username').val()
    const password = $('#password').val()
    if(username.length < 8 || password.length < 8 ){
        return alert('Tài khoản hoặc mật khẩu không hợp lệ')
    }
    
    if(!username || !password){
        return alert('dien du thong tin');
    } 

    let index = data.findIndex(function(value){
        return value.username === username
    })

    if(index >= 0){
        return alert('user da ton tai')
    } 

    data.push({username , password})
    window.localStorage.setItem('test' , JSON.stringify(data))
    $('.closeModal').trigger('click');
    render()
}

function render(){
    $('.listUser').html('')
    data.map(function(value , i){
        $('.listUser').append(`
            <div class='user user${i}' data-bs-toggle="modal" data-bs-target="#exampleModal">
                username : ${value.username}<br>
                password : ${value.password}
            </div>
        `)
        $(`.user${i}`).on('click' , function(){
            index = i
            $('.update').css({display: 'inline-block'})
            $('.delete').css({display: 'inline-block'})
            $('.create').css({display: 'none'})
        })
    })
    
}

function update(){
    const username = $('#username').val()
    const password = $('#password').val()

    if(!username || !password) return alert('dien du thong tin');
    let checkIndex = data.findIndex(function(value){
        return value.username === username
    })

    if(checkIndex >= 0) return alert('user da ton tai')

    data[index] = {username , password};
    window.localStorage.setItem('test' , JSON.stringify(data))
    $('.closeModal').trigger('click');
    render()
}

render()

function deleteAcount(){
    data.splice(index , 1)
    window.localStorage.setItem('test' , JSON.stringify(data))
    $('.closeModal').trigger('click');
    render()
}

function openCreateModal(){
    $('.update').css({display: 'none'})
    $('.delete').css({display: 'none'})
    $('.create').css({display: 'inline-block'})
}
