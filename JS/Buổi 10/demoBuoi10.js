// function cong (number1 , number2){
//     return number1 + number2
// }

// function tru (number1 , number2){
//     return number1 - number2
// }

// function nhan (number1 , number2){
//     return number1 * number2
// }
// function test (number1 , number2 , callBack){
//     let data = callBack(number1 , number2)
//     return Math.abs(data)
// }

// console.log(test(300 , -500 , nhan));

// Tạo callback tính tổng các aphanaf tử trong array

let array = [1 ,2 , 3,4, 5]
function tong(input) {
    var tong = 0
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        tong += element
    }
    return tong
}

function tich(input) {
    var tich = 1
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        tich *= element
    }
    return tich
}

function test (input , callBack){
    let data = callBack(input)

    return data
}

console.log(test (array , tong));
console.log(test (array , tich));


function sum (array , callBack){
    let total = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        total = callBack(total ,element)
        
    }
    return total
}

function product (number1 , number2){
    number1 = number2 === 0 ? 1 : number1
    return number1 * number2
}

// áp dụng callback để viết hàm có chức năng giống map

function callBackMap (array , callBack){
    var newArray = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        newArray.push(callBack(element , i))
    }
    return newArray
}

let kq = callBackMap(array , function(value , index){
    return value
})
console.log(kq);

// áp dụng callback để viết hàm filter và sort


// Tạo callBack có thể tìm tổng hoặc tích các phần tử trong array
// áp dụng filter 

var arr = [1 ,2,3,4,5,6,7,8,9,2,3,2,3]
var arr2 = ['a' , 'z' , 'c' , 'n' , 'b']

let newArray = filter(arr , function(value , index){
    return value % 2 == 0
})

let newArrayFillter = filter(arr , function(value , index){
    return index === arr.indexOf(value)
})

function filter(array , callBack){
    let result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result = callBack(element , i) ? [...result , element] : result
    }
    return result
}

console.log(newArrayFillter);

// áp dụng sort 

function sort(array , callBack){
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i+1] , array[i]) < 0) {
            let temp = array[i +1]
            array[i +1] = array[i]
            array[i] = temp
            i = -1
        }
    }
    return array
}

let newArr = sort(arr , function(a , b){
    return a - b
})

let newArrFilter = sort(arr2,function(a , b){
    if(b > a){
        return -1
    }
})
console.log(newArrFilter);