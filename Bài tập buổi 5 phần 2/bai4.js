/**
 * // Bài 4:
// Cho array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
// a) Hãy in ra vị trí đẩu tiên xuất hiện số 7
// b) Hãy in ra vị trí đẩu cuối cùng xuất hiện số 7
// c) Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
// d) Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
// e) Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau:
// là lớn hơn 5 và phần tử đó cộng 2 chia hết cho 3

 */

var array4 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13]

// a
var findNumber = array4.indexOf(7)
console.log(findNumber);

// b
var findLastNumber = array4.lastIndexOf(7)
console.log(findLastNumber);

// c
var descending = array4.sort(function(a ,b){
    return b - a
})
console.log(descending);

var ascending = array4.sort(function(a ,b){
    return a - b
})
console.log(ascending);

// d
var newArray = array4.filter(function(value){
    if(value > 5){
        return true
    }
})
console.log(newArray);

// e
var newArray2 = newArray.filter(function(value){
    if((value + 2) % 3 == 0){
        return value
    }
})
console.log(newArray2);