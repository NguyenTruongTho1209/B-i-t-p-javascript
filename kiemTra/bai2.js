/**
 * Bai 2: 
var data = [1,2,'a',3,'2',1,'c',2,3,4,'c','3',5,6,5,4,6,'a']
a, hãy lọc trùng array trên để các phần tử bên trong chỉ hiển thị 1 lần, không lặp lại
b, hãy tính tổng các phần tử trong array (tính cả string number)
 */

var data = [1,2,'a',3,'2',1,'c',2,3,4,'c','3',5,6,5,4,6,'a']

// a
function trungLap (input){
    var array = []
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(array.indexOf(element) === -1){
            array.push(element);
        }
    }
    return array
}

console.log(trungLap(data));

// b
var tong = 0
var tinhTong = data.map(function(value){
    if(parseInt(value)){
        tong += parseInt(value)
    }
})
console.log(tong);