/**
 *  Bài 4
var array = [1,3,2,4,4,1,2,3,5,7,9,4,1,2,3]
// hãy tạo array mới cho biết số lần lập lại của các phần tử
// => [{value: 1, rep : 3}, {value: 2, rep: 3}, ....]
 */

let array = [1,3,2,4,4,1,2,3,5,7,9,4,1,2,3]

let copyArray = JSON.stringify(array)
let useArray = JSON.parse(copyArray)

let newArray = []

for (let i = 0; i < useArray.length; i++) {
    const element = useArray[i];
    if(newArray.indexOf(element) === -1){
        newArray.push(element)
    }
}
// console.log(newArray);

function HienThi(input1 , input2) {
    
    var ketQua = []
    for (let i = 0; i < input1.length; i++) {
        const element = input1[i];
        var count = 0;
        for (let j = 0; j < input2.length; j++) {
            const element1 = input2[j];
            if(element === element1){
                count++
            }
        }
        ketQua.push({value:element , lapLai:count})
    }
    return ketQua
}
// console.log(array);
console.log(HienThi(newArray , useArray));