// Bài 2:  
// giả sử tải file nặng 500 mb
// tốc độ tải mỗi giây biến động trong khoảng từ 1 - 10 mb/s
// hãy hiển thị % download mỗi giây 1 lần, đến 100% thì thông báo tải thành công và kết thúc
// Nâng cao bài 2 là mỗi lần hiển thị % download mới thì thời gian ngẫu nhiên từ 1 đến 3 giây

let file = 500

function dowload(input) {
    let sum = 0
    let phanTram = input/100
    for (let i = 0; i < input; i++) {
        let randomNumber = Math.round(Math.random() * 10)
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
    }
}