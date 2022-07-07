/**
 * Bài 3 
// -) sử dụng vòng lặp for để tạo 1 array mới chứa các phần tử của array trên thỏa mãn các điều kiện sau:
// Cho array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
a )  Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
b)Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.
 */

var array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9]

// a
var newArray = array3.filter(function(value){
    if(value % 2 == 0){
        return true
    }
})
console.log(newArray);

// b
var newArray2 = array3.filter(function(value){
    if(value % 2 !== 0){
        return true
    }
})
console.log(newArray2);
