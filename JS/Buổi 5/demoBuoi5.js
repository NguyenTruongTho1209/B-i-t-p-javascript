var array = [1 ,2 ,3 ,3 ,4]
// var array1 = [0 , 2 , 4 , 6 , 8]

// array.push(...array , ...array1)

// console.log(array);
// array.pop();
// console.log(array);

array.unshift(0)
console.log(array);

array.shift()
console.log(array);

var object = {
    ten: 'Tho',
    tuoi: 22
}
var object2 = {
    que: 'HN',
    DC: '12 abc'
}

console.log({...object , ...object2});

var array1 = [1 , 3 , 5, 7 , 9];
var array2 = [2 , 4 ,6 ,8 , 0]

array1.splice(3 , 0 , ...array2)
console.log(array1);

// array.splice()

var array = [1 ,2 ,3 ,3 ,4]
// => [2 , 4 , 6 , 8]
array.map(function(value , index){
    console.log(value , index);
})

var newArray = array.map(function(value , index){
    return value * 2;
})
console.log(44 , newArray);

var array3 = [
    {price: 100 , quantiny: 20},
    {price: 200 , quantiny: 30},
    {price: 400 , quantiny: 40},
    {price: 500 , quantiny: 50}
]

var newArray = array3.map(function (value , index) {
    value.total = value.price*value.quantiny
    return value
})
console.log(newArray);

var student = [
    {ten: 'lam', diem: {toan: 7, ly: 8, hoa:6}},
	{ten: 'kien', diem: {toan: 6, ly: 8, hoa:9}},
	{ten: 'hai', diem: {toan: 8, ly: 8, hoa:8}},
	{ten: 'binh', diem: {toan: 7, ly: 8, hoa:7}},
]
// tính tổng điểm cho từng học sinh

var tongDiem = student.map(function (value){
    value.diem.tongDiem = value.diem.toan + value.diem.ly + value.diem.hoa
    return value
})
console.log(tongDiem);

var newArr = tongDiem.filter(function(value , index) {
    if(value.diem.tongDiem > 22){
        return true
    }else{
        return false
    }
})

console.log(81 , newArr);

var array10 = [1 , 2 ,3 ,4 ,10 , 20 , 30 , 40] 
// lọc các số chỉ dữ lại các số chia hết cho 10

var arr10 = array10.filter(function(value){
    return value%10 == 0
})
console.log(arr10);

array.sort(function(after , before){
    if(after < before){
        return - 3
    }
})
console.log(array);

var chu = ['a' , 'b' , 'g' , 'd' , 'c']

chu.sort(function(after , before) {
    if(after < before){
        return -3
    }
})
console.log(chu);

var array2 = [5,2,4,6,6,7]
// xếp tăng dần after < before

array2.sort(function(after , before) {
    if(after < before){
        return -1
    }
})
console.log(array2);
/**
 * return -     after lên trước before
 * return +     before đứng trước after
 * return 0     giữ nguyên vị trí
 */

var arr = ['hello' , 'anh' , 'em'];
var arr2 = [20 , 10 , 2022]

var string = arr.join(' ')
var string2 = arr2.join('/')
console.log(string);
console.log(string2);

console.log(arr2.indexOf(2));

