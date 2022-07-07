/**
 * Bài 3 :  

promise1 xử lý tác vụ 3s  cho ra kết quả là 2
promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
in ra màn hình true hoặc false. 
 */
let dataP1 = 0
let promise1 = new Promise(function(res , rej){
    setTimeout(function(){
        res(2)
    }, 3000)
})
.then(function(data){
    console.log(data);
    dataP1 = data
}).catch(function(err){
    console.log(err);
})

let promise2 = new Promise(function(res , rej){
    setTimeout(function(){
        res(dataP1*3)
    }, 3000)
})
// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

Promise.all([promise1 , promise2]).then(function(data){
    if(data[1] < 10){
        console.log(true);
    }else{
        console.log(false);
    }
}).catch(function(err){
    console.log(err);
})