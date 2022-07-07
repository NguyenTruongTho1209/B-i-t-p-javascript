/**
 * 3,viết function có đầu vào là 1 array
	Function trả ra array mới với thứ tự ngược lại với array ban đầu
 */

var array = [3,5,4,9,8,1,10];

function reverseArray (Array){
    var temp = 0
    for(var i = 0 ; i < Array.length/2 ; i++){
        temp = Array[i];
        Array[i] = Array[Array.length - (i + 1)];
        Array[Array.length - (i + 1)] = temp
    }

    return Array;
}
console.log(reverseArray(array));
