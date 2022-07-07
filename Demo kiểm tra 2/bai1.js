/**
 * Bài 1  :
var data = ['van anh', 'van thanh', 'tuan kien', 'van anh', 'tien thanh', 'lam hai', 'le thai', 'hai kien','hai vu','tuan kien','lam hai'] 

a, hãy viết hoa chữ cái đầu tiên trong họ tên của từng người
b, hãy cho biết có bao nhiêu người trùng tên
// kết quả: [
{ten: 'van anh', soLuong: 2},{ten:'tuan kien', soLuong: 2},……
]
 */

var data = ['van anh', 'van thanh', 'tuan kien', 'van anh', 'tien thanh', 'lam hai', 'le thai', 'hai kien','hai vu','tuan kien','lam hai']

// a
var stringData = data.map(function(value){
    return value.split(' ')
})

var newData = stringData.map(function(value){
    var newName = value.map(function(value1){
        return value1.replace(value1[0] , value1[0].toUpperCase())
    }).join(' ')
    return newName
})
console.log(newData);

// b

function trungLap(input){
    var array = []
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(array.indexOf(element) === -1){
            array.push(element)
        }
    }
    return array
}

function hienThi (input){
    
    for (let i = 0; i < trungLap(input).length; i++) {
        const elementtrungLap = trungLap(input)[i];
        var count = 0 
        for (let j = 0; j < input.length; j++) {
            const element = input[j];
            if(element === elementtrungLap){
                count++
            }
        }
        console.log({ten: elementtrungLap , soLuong: count});
    }
}

hienThi(data)