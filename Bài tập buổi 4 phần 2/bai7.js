// Bài 7: 
// Cho array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];
// Cho array2 = [4,6,3,8,5,7,4,1,2,9,6,5,3,1,5,2,7,6,8,6,3,2,1,5];
// Cho array3 = [2,5,1,6,3,8,4,10,5,3,1,6,5,2,6,4,8,9,2,1,5,8,7,12];
// a) Viết function Tính tổng, tích, giá trị trung bình cộng của cả 3 array
// 
//b) Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3 của array1 với tích phần 
// tử từ đầu đến vị trí có giá trị là 5 xuất hiện lần 2 của array2
//c) Viết function Tính tích, tính tổng của các phần tử từ vị trí số 2 xuất hiện lần đầu đến vị trí số 
// 2 xuất hiện lần thứ 4 của cả 3 array . 
var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];
var array2 = [4,6,3,8,5,7,4,1,2,9,6,5,3,1,5,2,7,6,8,6,3,2,1,5];
var array3 = [2,5,1,6,3,8,4,10,5,3,1,6,5,2,6,4,8,9,2,1,5,8,7,12];

// a
function calculate (input){
    var sum = 0 ;
    var core = 1;
    var medium = 0;
    for(var i = 0 ; i < input.length ; i++){
        sum = sum + input[i];
        core = core*input[i]
    }
    medium = sum/input.length
    console.log(
`Tổng của array là : ${sum} 
Tích của array là : ${core}
Trung bình cộng của array là : ${medium}`);
}
console.log(29);
calculate(array1);
console.log(30);
calculate(array2);
console.log(31);
calculate(array3);

// b
function tinhTich (array , number , countValue){
    var count = 0;
    var tich = 1
    for(var i = 0 ; i < array.length ; i++){
        count = array[i] === array[number] ? ++count : count
        tich *= array[i]
        if(count == countValue){
            break
        }
    }
    return tich;
}

console.log(tinhTich(array1 , 2 , 3)*tinhTich(array2 , 5 , 2));

// c
function tinhToan (array , number , countValue){
    var count = 0;
    var tong = 0;
    var tich = 1
    for(var i = 2 ; i < array.length ; i++){
        count = array[i] === array[number] ? ++count : count
        tich *= array[i]
        tong += array[i]
        if(count == countValue){
            break
        }
    }
    console.log(`Tổng của các phần tử trong array là : ${tong}
Tích của các phần tử trong array là : ${tich}`);
}
tinhToan(array1 , 2 , 4)
tinhToan(array2 , 2 , 4)
tinhToan(array3 , 2 , 4)