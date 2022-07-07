var object = {ten:'huy' , toi:16}
var object2 = object
object2.ten = 'kien'

object2 = {...object}

object2.phone = '123123123'
console.log(object2);
console.log(object);

var array = [1,2,3]
var array1 = array
var array2 = [...array]

array2.push(4)
// array1.push(4)
console.log(array);
console.log(array1);
console.log(array2);


var arr = [
    {ten: 'lan' , tuoi:20} , 1 , 2 ,3 ,4
]

var newArr = [...arr]

var string = JSON.stringify(arr)

var newArr = JSON.parse(string)

newArr[0].ten = 'cuong'
newArr[3] = 77

console.log(arr);
console.log(newArr);

//===========================================================

var x = 10;

var x = 20;

console.log(x);

let a = 10

// let a = 20
console.log(a);

const newArray = [1,2,3,4,5,6,7]

newArray.push(100)
console.log(54 , newArray);

//========================================================
// blockScope
for(var i = 0 ; i < 5 ; i++){

}
console.log(i);

// for(let j = 0 ; j < 5 ; j++){

// }
// console.log(j);

//=============================================================
//functionScope

function test (){
    var x = 10
    console.log(3 , x);
    return x
}

var y = test()
console.log(y);
console.log(6 , x);

//===============================================================
//globalScope

// let x = 10

function test1 (){
    console.log(9 , x);
    return x
}

test()

console.log(x);

//============================================================

// console.log(x);

// var x = 10 // undefine

// let x = 10 // lỗi

// const x = 10 // lỗi
