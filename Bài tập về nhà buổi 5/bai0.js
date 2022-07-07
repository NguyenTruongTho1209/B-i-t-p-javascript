/**
 *  *B0:
 cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
bài 1.1: // * in ra các số chẵn trong mảng
bài 1.2: // * in ra các số lẻ  trong mảng
bài 1.3: // * in ra các số lớn hơn hoặc bằng 5 trong mảng
bài 1.4:// *in ra các số chia hết cho 5 trong mảng
bài 1.5:// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
bài 1.6: dùng splice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
bài 1.7: .splice để xóa 1 phần tử trong mảng
bài 1.8: .push thêm 1 phần tử vào cuối mảng 

* dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]
 */

var array = [1,5,7,8,9,15]
// 1.1
var soChan = array.filter(function(value){
    if(value % 2 == 0){
        return true
    }
})
console.log(23 ,soChan);

// 1.2
var soLe = array.filter(function(value){
    if(value % 2 !== 0){
        return true
    }
})
console.log(31 , soLe);

// 1.3
var lonHonNam = array.filter(function(value){
    if(value >= 5){
        return true
    }
})
console.log(39 , lonHonNam);

// 1.4

var chiaChoNam = array.filter(function(value){
    if(value % 5 == 0){
        return true
    }
})
console.log(48 , chiaChoNam);

// 1.5
var tangMot = lonHonNam.map(function(value){
    return value + 1
})
console.log(54 , tangMot);

// 1.6
var arrayCopy = array.splice(3,(array.length-3))
console.log(arrayCopy);

// 1.7
array.splice(1,1)
console.log(62 , array);

// 1.8
array.push(5)
console.log(66, array);

// 1.9
var tang = array.map(function(value){
    return value*2
})
console.log(tang);