// Bài 3:
// Cho array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];
// a , Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3
// b ,Viết function tính tích , tính tổng , tính trung bình cộng của dãy array2 là x số cuối của dãy array1
// c ,Viết function Tính tích, tính tổng của các phần tử từ vị trí số 2 xuất hiện lần đầu đến vị trí số 2 xuất hiện lần thứ 4

let array = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12]

// a
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


function coreArray (input , callBack , number , countValue){
    let core = 1
    for (let i = 0; i < callBack(input , number , countValue).length; i++) {
        const element = callBack(input , number , countValue)[i];
        core *= element
    }
    console.log('Tích của các số là : ' , core);
}

// coreArray(array , newArray , 2 , 3)

// b
// function lastNumber (input , number){
//     let copyInput = JSON.stringify(input)
//     let newInput = JSON.parse(copyInput)
//     for (let i = 0; i < newInput.length; i++) {
//         for (let j = 0; j < i; j++) {
//             const element = newInput[newInput.length - i];
//             if (element === input[input.length - number]) {
//                 newInput.splice(j , i)
//             }
//         }
//     }
//     return newInput
// }
// console.log(lastNumber(array , 3));