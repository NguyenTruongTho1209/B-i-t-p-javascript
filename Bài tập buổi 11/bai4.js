/**
 * 
B4: tạo 1 promise1 với tác vụ resovle sau 3 giây (dùng settimeout)
	tạo 1 promise2 tác vụ resolve sau 2 giây
	tạo 1 promise3 tác vụ reject sau 2 giây
dùng .all  để thực hiện song song tác vụ tiết kiệm time.
 */

let promise1 = new Promise(function(res){
    setTimeout(function(){
        res('Nguyen');
    } , 3000)
})

let promise2 = new Promise(function(res){
    setTimeout(function(){
        res('Truong')
    }, 2000)
})

let promise3 = new Promise(function(res){
    setTimeout(function(){
        res('Tho')
    }, 2000)
})

Promise.all([promise1 , promise2 , promise3]).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})