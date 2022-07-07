/**
 * B8 
Kiểm tra 1 số có phải là số nguyên tố hay không
Biết số nguyên tố chỉ chia hết cho 1 và chính nó
 */
var n = 12;
var cout = 0;
for (var i = 0 ; i <= n ; i++){
    if(n%i == 0){
        cout++
    }
}

if(cout > 2){
    console.log('n không phải là số nguyên tố ');
}else{
    console.log('n là số nguyên tố');
}