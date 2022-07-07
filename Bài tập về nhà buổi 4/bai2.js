/**
 * 2 viết function có đầu vào là 1 array chứa các số
a, Function trả ra số lớn nhất trong array 
 */

var array = [3,5,4,9,8,1,10];

function maxArray(Array){
    var max = 0
    for(var i = 0 ; i < Array.length ; i++){
        if(max < Array[i]){
            max = Array[i]
        }
    }
    return max
}
console.log(maxArray(array));