/**
 * B5: áp dụng hợp lý, promise1 xử lý 2s retrun 3. promise2 xử lý 5s return 7
Bài toán Cần data của 2 tác vụ trên, biết prmise1 vs promise2 không phụ thuộc nhau. 
Viết chương trình sao cho kết quả trả về 3+7=10 trong thời gian ngắn nhất 
 */

function timeOut (timePro1 , timePro2){
    if(timePro1 > timePro2){
        timePro1 = timePro2
        return timePro1
    }else{
        timePro2 = timePro1
        return timePro2
    }
}
let promise1 = new Promise(function(res){
    setTimeout(function(){
        res(3)
    }, timeOut(2000 , 5000))
})

let promise2 = new Promise(function(res){
    setTimeout(function(){
        res(7)
    }, timeOut(2000 , 5000))
})

Promise.all([promise1 , promise2]).then(function(data){
    console.log(`${data[0]} + ${data[1]} = ${data[0] + data[1]}`);
})