/**
 * bai 1: var data = ['trung kien', 'van thanh', 'tuan kien', 'thanh tung', 'tien thanh', 'lam tung', 'le thanh', 'hai kien']
a, hãy viết hoa chữ cái đầu tiên trong họ tên của từng người
b, hãy cho biết có bao nhiêu người trùng tên
// kết quả: [
{ten: 'kien', soLuong: 2},{ten: thanh, soLuong: 3},……
]
 */

var data = ['trung kien', 'van thanh', 'tuan kien', 'thanh tung', 'tien thanh', 'lam tung', 'le thanh', 'hai kien']

// a
var stringName = data.map(function(value){
    return value.split(' ')
})

var newData = stringName.map(function(value){
    var newName = value.map(function(value1){
        return value1.replace(value1[0] , value1[0].toUpperCase())
    }).join(' ')
    return newName
})

console.log(newData);

// b
function trungLap (input){
    var array = []
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(array.indexOf(element.split(' ')[1]) === -1){
            array.push(element.split(' ')[1])
        }
    }
    return array
}
console.log(data);
function hienThi (input){
    for (let i = 0; i < trungLap(input).length; i++) {
        const elementtrungLap = trungLap(input)[i];
        var count = 0
        for (let j = 0; j < input.length; j++) {
            const element = input[j];
            if(elementtrungLap === element.split(' ')[1]){
                count++
            }
        }
        console.log({ten: elementtrungLap , soLuong: count});
    }
}
hienThi(data)
