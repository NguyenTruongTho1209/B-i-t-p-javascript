/**
 * 
B4:	
cho tài khoản khách số dư 10 tr thực hiện mua hàng 3 tr và nhận hoàn tiền 10%
tài khoản shop dư 100tr
let khachHang = 10
let shop = 100
viết promise1 kiểm tra số dư trong 1s và trả về true nếu số dư của khách đủ để thanh toán / false nếu khách không đủ số dư
viết promise2 để chuyển tiền từ khách sang shop ( khách - 3 , shop + 3) và trả về số dư của 2 bên
viết promise3 để hoàn tiền 10% sau khi đã thanh toán ở promise2 và trả về số dư của 2 bên
(khách + 10% * 3 ,  shop - 3 * 10%)  
 */
let khachHang = 10
let shop = 100

// let promise1 = new Promise(function(res , rej){
//     setTimeout(function(){
//         if(khachHang >= 3){
//             res(true)
//         }else{
//             res(false)
//         }
//     } , 1000)
// })

// let promise2 = new Promise(function(res , rej){
//     khachHang -= 3
//     shop += 3
//     res(`Số dư của khách hàng là : ${khachHang}
// Số dư cảu shop là : ${shop}`)
// })

// let promise3 = new Promise(function(res , rej){
//     khachHang = khachHang + 0.1 * 3
//     shop = shop - 0.1 * 3
//     res(`Số dư của khách hàng là : ${khachHang}
// Số dư cảu shop là : ${shop}`)
// }).then(function(data){
//     console.log(data);
// })

new Promise(function(res , rej){
    setTimeout(function(){
        if(khachHang > 3){
            return res(true)
        }else{
            return rej(false)
        }
    } , 1000)
}).then(function(value){
    return new Promise(function(res , rej){
        if(value){
            khachHang -= 3
            shop += 3
            return res(khachHang , shop)
        }else{
            rej(false)
        }
    })
}).then(function(data){
    return new Promise(function(res , rej){
        if(data){
    khachHang = khachHang + 0.1 * 3
    shop = shop - 0.1 * 3
    return res({khachHang , shop}) 
        }else{
            rej(false)
        }
    })
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log('Không đủ tiền');
})