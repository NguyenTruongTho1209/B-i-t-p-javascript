/**
 * Bài 2  : 
Viết function với đầu vào là một số nguyên  n ,và một Array chứa các số . 
Đếm xem  số n được lặp bao nhiêu lần trong Array .  
Nếu không có phần tử nào trùng thì in ra  “ Không có phần tử nào trùng “
 */

var n = 1;
var array2 = [1,9,3,7,6,4,5,2,1,3,2,3,9];

function countNumber (Number , Array){
    var count = 0;
    for(var i = 0 ; i < Array.length ; i++){
        if(Array[i] === Number){
            count++;
        }
    }

    if(count > 0){
        console.log(`Số lần số ${Number} Xuất hiện trong aray là : ${count}`);
    }else{
        console.log('Không có phần tử nào trùng');
    }
}

countNumber(n , array2)

