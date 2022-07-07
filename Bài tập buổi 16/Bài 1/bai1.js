/**
 * Áp dụng localstorage 

Tạo một form đăng nhập  
Và 1 form đăng ký .
Tạo thêm 1 trang chủ nếu đăng nhập thành công . 

Yêu cầu : 
Tài khoản và mật khẩu phải trùng với 1 trong các tài khoản đã đăng ký .  
Form đăng nhập : 
Tài khoàn và mật khẩu không được để trống . 
Mật khẩu phải >=8 ký tự . 
 Sử dụng alert() để in ra thông báo  . 
Khi đăng nhập thành công chuyển đến trang chủ . 
Form đăng ký  :
  tên đăng ký không được trùng với các  tài khoản đã có . 
Mật khẩu phải >=8 ký tự .
 */

let data = window.localStorage.getItem('account')

if(!data){
    window.localStorage.setItem('account' , '[]')
    data = []
}else{
    data = JSON.parse(data)
}


function add(){
    const username = $('#username').val()
    const password = $('#password').val()

    if(username.length < 8 || password.length < 8){
        return alert('Tài khoản hoặc mật khẩu không hợp lệ')
    }

    if(!username || !password){
        return alert('Điền đủ thông tin')
    }

    let count = data.findIndex(function(value){
        return value.username === username
    })

    if(count >= 0){
        return alert('Tài khoản đã tồn tại')
    }

    data.push({username , password})
    window.localStorage.setItem('account' , JSON.stringify(data))

    alert('đăng ký thành công')
}

var count = 0

function login(){
  const username = $('#user').val()
  const password = $('#password').val()

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if(element.username === username && element.password === password){
      count++
      alert('Đăng nhập thành công')
    }
  }
  if(count === 0){
    return alert('Thông tin tài khoản hoặc mật khẩu không đúng')
  }
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
    })
  })
}