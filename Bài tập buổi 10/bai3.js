/**
 * Bài 3
 * / Cho array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]
// a) Hãy viết 1 funtion in ra dãy các số nguyên tố và vị trí của nó trong array  
// b) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array
// c) Viết funtion để tính tích của các số nguyên tố trong dãy array
 */

let array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]

// a

function soNguyenTo (input){
    let arrayNumber = []
    for (let i = 0; i < input.length; i++) {
        let count = 0
        const element = input[i];
        if (element < 2) {
            continue;
        }
        for (let j = 0; j < element; j++) {
            if (element % j == 0) {
                count++
            }
        }
        if (count < 2) {
            arrayNumber.push(element)
        }
    }
    return arrayNumber;
}

function viTri(input , callBack) {
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        for (let j = 0; j < callBack(input).length; j++) {
            const elementCallBack = callBack(input)[j];
            if (element === elementCallBack) {
                console.log('Vị trí của số nguyên tố đó là ' + i);
            }
        }
    }
}

// b

function sumNumber (input , callBack){
    let sum = 0
    for (let i = 0; i < callBack(input).length; i++) {
        const element = callBack(input)[i];
        sum += element
    }
    console.log('Tổng của các số nguyên tố trong array là : ' , sum);
    console.log('Trung bình cộng cảu các só nguyên tố trong array là : ' , sum/input.length);
}

// c
function volumeNumber (input ,callBack){
    let volume = 1;
    for (let i = 0; i < callBack(input).length; i++) {
        const element = callBack(input)[i];
        volume *= element
    }
    console.log('Tích các số nguyên tố trong array là : ' , volume);
}
volumeNumber(array , soNguyenTo)
