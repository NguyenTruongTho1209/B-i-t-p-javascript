/**
 * 4 	viết function có đầu vào là số number và 1 array chứa số
	Function trả ra số lần number lặp lại trong array
 */
var array = [3,5,4,9,8,1,10 , 1 ,2 ,1 ,3, 1];

function countNumber (Number , Array){
    var count = 0;
    for(var i = 0 ; i < Array.length ; i++){
        if(Number == Array[i]){
            count++
        }
    }
    return count
}
console.log(countNumber(1,array));