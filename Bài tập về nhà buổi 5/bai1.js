/**
B1
var array1 = ['4', '6', 1,2,3,5, 'y', 't', 5]
// viết function có đầu vào là 1 arr return tổng các number và string number trong array
 */
var array1 = ['4', '6', 1,2,3,5, 'y', 't', 5]

var tong = 0
array1.map(function(value){  
if(parseInt(value)) {
    tong = tong + parseInt(value);
}

return tong
})

console.log(tong);