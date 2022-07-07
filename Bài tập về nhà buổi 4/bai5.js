/**
 * 5 	viết function có đầu vào là 1 string
	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới
 */

var arrayString = ' Nguyễn Trường Thọ'

function replaceString (input){
    var string = '';
    for(var i = 0 ; i < input.length ; i++){
        if(input[i] != ' '){
            string = string + input[i]
        }else{
            string = string + '-'
        }
    }
    return string
}
console.log(replaceString(arrayString));

// Viết function có đầu vào là 1 string , 1 ký tự tìm kiếm và 1 kí tự thay thế
// Tìm tất cả các ký tự tìm kiếm ở trong string và thay thế bằng kí tự thay thế

function changeString (String,findString , replaceString){
    var newString = '';
    for(var i = 0 ; i < String.length ; i++){
        if(String[i] !== findString){
            newString += String[i];
        }else{
            newString += replaceString;
        }
    }
    return newString;
}

console.log(changeString('12-09-2000' , '-','/'));