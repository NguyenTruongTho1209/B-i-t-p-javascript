// console.log(Math.abs(-10));

// console.log(Math.PI);

// console.log(Math.cbrt(27));

// console.log(Math.round(9.9999999999));

// console.log(Math.ceil(6.01));

// console.log(Math.floor(9.999));

// console.log(9.375248.toFixed(2));

// var arr = [3,5,7,7,8,4,32,43]
// console.log(Math.max(...arr));

// console.log(Math.min(...arr));

// console.log(Math.pow(5 ,2));

// console.log(Math.trunc(9.1234356));

// console.log(Math.round(Math.random() * 50 + 50));

// // tạo chuỗi 6 kí tự ngẫu nhiên 
// // mỗi kí tự có giá trị 0 - 9 hoặc a - f
// var string = ''

// for (let i = 0; i < 6; i++) {
//    var randomNumber = Math.round(Math.random() * 15)
//    if(randomNumber < 10){
//         string += randomNumber
//    }else{
//        string += String.fromCharCode(87 + randomNumber)
//    }
// }
// console.log(string);

// xxxx-xxxx-xxxx-xxxx 0-9 , a-z , A-Z


function pass (){
    var pass = ''
    for (let i = 0; i < 4; i++) {
        var randomNumber = Math.round(Math.random() * 59)
        if(randomNumber < 10){
            pass += randomNumber
        }else if(randomNumber < 36){
            pass += String.fromCharCode(55 + randomNumber)
        }else{
            pass += String.fromCharCode(61 + randomNumber)
        }
    }
    return pass
}
// console.log(pass());
var string = 'xxxx-xxxx-xxxx-xxxx'

function stringPass(newString){
    return newString = newString.replace('xxxx' , pass())
}
// string = stringPass(string)
// // console.log(stringPass(string));
// string = stringPass(string)
// // console.log(stringPass(string));

// string = stringPass(string)
// // console.log(stringPass(string));

// string = stringPass(string)
// console.log(stringPass(string));
for(var i = 0 ; i < 3 ; i++){
    string = stringPass(string)
}
console.log(stringPass(string));

// chữa bài

var fomat = 'xxxx-xxxx-xxxx-xxxx'
function randomText (){
    var number = Math.round(Math.random() * 61)

    if(number < 10){
        return number
    }else if(number < 36){
        return String.fromCharCode(55 + number)
    }else{
        return String.fromCharCode(61 + number)
    }
}
var length = fomat.match(/x/g).length

for(var i = 0 ; i < length ; i++){
    var random = randomText()
    fomat = fomat.replace(/x/ , random)
}
console.log(fomat);