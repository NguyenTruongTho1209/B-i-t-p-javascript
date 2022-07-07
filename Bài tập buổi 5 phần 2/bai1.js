/**
 * Bài 1 :   
var array = [1 ,3,7,8,9,0,10,3,2]; 
 a ) áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  . 
 b )  áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 
c  ) cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả . 
d ) cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )
 */

var array = [1 ,3,7,8,9,0,10,3,2];

// a
var sortArray = array.sort(function(after , before){

    return after - before
})

console.log(18 , sortArray);

// b
var newArray = array.map(function(value){

    return value*2
})

console.log(26 , newArray);

// c
var array3= [1,2,3,5,1]
array.unshift(array3)

console.log(32 , array);

// d
array.splice(5 , 0 , array3)

console.log(37 , array);

/**
 * // kết quả trả về [2,6,14,16,18,0,22,6,4] .
e ) áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn .  
f )  Thêm số 5 vào giữa array .
 */

var arrayA = [2,6,14,16,18,0,22,6,4]

// e
var oddNumber = array.filter(function(value){
    if(value%2 !== 0){
        return true
    }
})
console.log(53,oddNumber);

var evenNumber = array.filter(function(value){
    if(value%2 == 0){
        return true
    }
})

console.log(61 , evenNumber);

// f

array.splice(array.length/2 , 0 , 5)
console.log(66 , array);