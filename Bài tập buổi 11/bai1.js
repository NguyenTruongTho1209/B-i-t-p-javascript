// Bài 2:  
// giả sử tải file nặng 500 mb
// tốc độ tải mỗi giây biến động trong khoảng từ 1 - 10 mb/s
// hãy hiển thị % download mỗi giây 1 lần, đến 100% thì thông báo tải thành công và kết thúc
// Nâng cao bài 2 là mỗi lần hiển thị % download mới thì thời gian ngẫu nhiên từ 1 đến 3 giây

let file = 500

function dowload(input) {
    let sum = 0
    let phanTram = input/100
    let setTime = setInterval(function(){
        let randomNumber = Math.round(Math.random() * 10)
        // let randomTime = Math.round(Math.random() * 2 + 1)
        // randomTime = randomTime*1000
        if(randomNumber > 0 && sum < input){
            sum += randomNumber
            let ketQua = sum/phanTram
            if (ketQua < 100) {
                console.log(ketQua ,'%');
            }else{
                ketQua = 100
                console.log(ketQua ,'%');
                console.log('Download thành công');
            }
        }
    } , 1000)
}

// dowload(file)

// nâng cấp bài 1
function randomTime(tongThoiGian){
    return tongThoiGian = Math.round(Math.random() * 2 + 1)
}
function dowloadProMax(input , callBack) {
    var total = 0
    let i = 0
    let sum = 0
    let tongThoiGian = 0
    let kq = setInterval(function(){
        total += Math.round(Math.random()*9 + 1)
        tongThoiGian = callBack(tongThoiGian)
        i+= tongThoiGian
        sum = (total/input) *100
        if(sum < 100){
            console.log(' ');
            console.log('----------------------');
            console.log(' ');
            console.log(i + 's');
            console.log(total + ' MB');
            console.log(sum + '%');
        }else{
            console.log(' ');
            console.log('----------------------');
            console.log(' ');
            console.log(i + 's');
            console.log(500 + ' MB');
            console.log(100 + '%');
            clearInterval(kq)
        }
    } , 1000)
}

dowloadProMax(file , randomTime)