/**
 * // Cho array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]
// -) Hãy viết 1 function in ra dãy các số nguyên tố và vị trí của nó trong array  
// -) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array
// -) Viết function để tính tích của các số nguyên tố trong dãy array 
 */

var array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43];
for(var i = 0 ; i < array.length ; i++){
    if(array[i] < 2){
        console.log(i , array[i]);
    }else if(array[i] == 2){
        console.log(i , array[i]);
    }else if (array[i] > 2){
        for(var j = 0 ; j <= array[i] ; j++){
            var count = 0
            if(array[i] % j == 0){
                count++
            }
        }
        if(count > 2){
            break
        }else{
            console.log(i , array[i]);
        }
    }
}
