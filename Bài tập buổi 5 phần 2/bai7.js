/**
 * Bài 7 :
// Cho arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'] 
a, Hãy chia arr trên thành 2 array nhỏ theo kiểu dữ liệu khác nhau và sắp xép theo thứ tự tăng dần .
b, Hãy tính tổng của các giá trị number và các string number trong arr
c, Hãy sắp xếp arr trên theo thứ tự tăng dần.
d, Hãy lấy các giá trị có thuộc tính là numbet từ arr và kiểm tra xem các số đó có phải là số nguyên tố hay không . 

 */
var array7 = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'] 

// a
var arrayNumber = array7.filter(function(value){
    if(typeof(value) == 'number'){
        return true
    }
})
console.log(arrayNumber);

var arrayString = array7.filter(function(value){
    if(typeof(value) == 'string'){
        return true
    }
})

console.log(arrayString);

// b

var sum = 0 ;
array7.map(function(value){
    if(parseInt(value)){
        sum += parseInt(value)
    }
    return sum
})
console.log(sum);

// c
var arrayNumberString = array7.filter(function(value){
    if(value % 1 == 0){
        return true
    }
})

var sapXep = arrayNumberString.sort(function(a , b){
    return a - b
})
console.log(sapXep);

// d

var check = arrayNumber.filter(function(value){
    var count = 0
    if(value < 2){
        return false
    }else{
        for(var i = 2 ; i < value ; i++){
            if(value % i == 0){
                count ++
            }
        }
        if(count == 0){
            return true
        }
    }
})
console.log(check);