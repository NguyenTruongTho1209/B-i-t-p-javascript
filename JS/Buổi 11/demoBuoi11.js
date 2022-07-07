new Promise(function(res , rej){
    let soDu = 30000
    if(soDu >50000){
        res('ok')
    }else{
        rej( 'Vui lòng nạp thêm tiền')
    }
}).then(function(data){
    console.log(data);
}).catch(function(arr){
    console.log(11 , arr);
})

// setTimeout 

let timeOut = setTimeout(function(){
    console.log(19 , new Date());
} , 1000)

// clearTimeout(timeOut)

// setInterval
// let timeInterval = setInterval(function(){
//     console.log(27 , new Date());
// } , 4000)

// clearInterval(timeInterval)


// let p1 = new Promise(function(res , rej){
//     let ketqua
//     setTimeout(function(){
//         ketqua = true
//         if(ketqua){
//             res('upload thành công')
//         }else{
//             rej('upload failed')
//         }
//     }, 2000)
// })
// p1.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

let p1 = new Promise(function(res, rej){
    let kq
    setTimeout(function(){
        kq = {error: false, data: 500000}
        // kq = {error: true, message: 'user not found'}
        if(!kq.error){
            res(kq)
        }else{
            rej(kq)
        }
    },2000)
})

let p2 = new Promise(function(res, rej){
    let kq
    setTimeout(function(){
        kq = {error: false, data: 3000000}
        // kq = {error: true, message: 'user not found'}
        if(!kq.error){
            res(kq)
        }else{
            rej(kq)
        }
    },2000)
})
// p1.then(function(data){
//     p2.then(function(data2){
//         console.log(32 , data2.data + data.data);
//     })
// }).catch(function(err){
//     console.log(err);
// })

Promise.all([p1 , p2]).then(function(data){
    console.log(81 , data);
}).catch(function(err){
    console.log(83 , err);
})