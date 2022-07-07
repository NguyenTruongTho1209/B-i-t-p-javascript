/**
 * // Bài 2: 
let a = 30;
-) Gán giá trị biến của a thành 'số 30'
-) Cho array1 = [1,2,3,4,[123]]
Hãy tạo ra string từ array1 và biến đổi lại thành kiểu dữ liệu ban đầu
Hãy tạo ra array2 là copy của array1 và thêm 10 giá trị bất kỳ trong khoảng từ 0 đến 20 vào array2

 */

// a
let a = 30 ;

let string = 'số 30'

a = string

console.log(a);

// b
let array1 = [1,2,3,4,[123]]

let stringArray = JSON.stringify(array1)
console.log(typeof stringArray);

let newArray = JSON.parse(stringArray)
console.log(typeof newArray);

// c
let array2 = [...array1]

array2 = JSON.parse(stringArray)

array2[10] = 20

console.log(array2);