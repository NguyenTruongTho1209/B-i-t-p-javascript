// Cho array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];
// Cho array2 = [4,6,3,8,5,7,4,1,2,9,6,5,3,1,5,2,7,6,8,6,3,2,1,5];
// Cho array3 = [2,5,1,6,3,8,4,10,5,3,1,6,5,2,6,4,8,9,2,1,5,8,7,12];
// a , Viết function Tính tổng, tích, giá trị trung bình cộng của cả 3 array
// b ,Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3 của array1 với tích phần
// tử từ đầu đến vị trí có giá trị là 5 xuất hiện lần 2 của array2
// c ,Viết function tính tích , tính tổng , tính trung bình cộng của dãy là x số cuối của cả array1,array2,array3
// d ,Viết function Tính tích, tính tổng của các phần tử từ 
// vị trí số 2 xuất hiện lần đầu đến vị trí số 2 xuất hiện lần thứ 4 của cả 3 array

let array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];
let array2 = [4,6,3,8,5,7,4,1,2,9,6,5,3,1,5,2,7,6,8,6,3,2,1,5];
let array3 = [2,5,1,6,3,8,4,10,5,3,1,6,5,2,6,4,8,9,2,1,5,8,7,12];

// a

function sumArray (input){
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        sum += element
    }
    return sum
}

function coreArray (input){
    let core = 1;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        core *= element
    }
    return core
}

function averageArray (input){
    return sumArray(input)/input.length
}

function result (input , callBack){
    let data = callBack(input)
    return data
}

// b
function newArray (input , number , countValue){
    let newInput = []
    let count = 0
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        count = element === number ? ++count : count
        newInput.push(element)
        if (count == countValue) {
            break
        }
    }
    return newInput
}

function core (input, callBack , callBack1 ,  number , countValue){
    let newInput1 = callBack(input , number , countValue)
    let data = callBack1(newInput1)
    return data
}
let coreNewArray1 = core(array1 , newArray , coreArray , 2 , 3)
let coreNewArray2 = core(array2 , newArray , coreArray , 4 , 3)
console.log(coreNewArray1 * coreNewArray2);

// cách làm của trường
function main (arr, startIndex, callback){
    let tich = 1;
    let tong = 0;
    let tbc = 0;
    let cnt = 0

    for(let i = arr.length - 1; i >= 0; i--) {
        cnt++
        tich = callback(tich, arr[i], TICH) 
        tong = callback(tong, arr[i], TONG) 
        tbc = callback(tbc, arr[i], TONG) 
        if(cnt === startIndex) {
            break
        }
    }

    return [tich, tong, tbc / cnt]
}

 let a = main(array1, 3, function(ketQua, value, type){
    if (type === TICH) {
        return ketQua * value
    }
    if (type === TONG) {
        return ketQua + value
    }
})
console.log(a);