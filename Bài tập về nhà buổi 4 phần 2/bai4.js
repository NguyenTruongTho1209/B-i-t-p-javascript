/**
 * Bài 4: Viết 1 function kiểm tra số nhập vào có phải là số nguyên tố hay không?
 */

function checkNumber (number){
    var count = 0
    for(var i = 0 ; i < number**(1/2); i++){
        if(number%i == 0){
            count++
        }
    }
    if(count <= 2){
        console.log(number + 'Là số nguyên tố');
    }else{
        console.log(number + 'không phải là số nguyên tố');
    }
}

checkNumber(5)