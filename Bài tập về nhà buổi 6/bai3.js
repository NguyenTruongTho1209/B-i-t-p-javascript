/**
 * 3
cho String 

'Cloud đang là xu hướng công nghệ năm 2021 và AWS trở thành nhà cung cấp nền tảng Cloud được sử dụng rộng rãi nhất.
AWS 
Các công ty về CNTT đang vô cùng “khát” những người có chứng chỉ AWS
AWS 
Mức lương của một Developer mới đi làm 2 năm và có chứng chỉ AWS lương có thể đạt 30tr/tháng'

a, hãy sửa tất cả chữ aws thành 'amazone web services'
b, hãy sửa chữ aws cuối cùng 'amazone web services'
c, hãy sửa chữ AWS  thứ 3 thành  'amazone web services'

 */
var string = 
`Cloud đang là xu hướng công nghệ năm 2021 và AWS trở thành nhà cung cấp nền tảng Cloud được sử dụng rộng rãi nhất.
AWS Các công ty về CNTT đang vô cùng “khát” những người có chứng chỉ AWS AWS Mức lương của một Developer mới đi làm 2 năm và có chứng chỉ AWS lương có thể đạt 30tr/tháng`

// // a
var newString = string.replace(/AWS/g , 'amazone web services')
console.log(25 , newString);

// // b

var arrayString = string.split(' ')
for (let i = arrayString.length - 1; i >= 0 ; i--) {
    if(arrayString[i] === 'AWS'){
        arrayString[i] = arrayString[i].replace('AWS' , 'amazone web services')
        break;
    }
}
console.log(39 , arrayString.join(' '));

// c
var count = 0 ;
for (let i = 0; i < arrayString.length; i++) {
    if(arrayString[i] === 'AWS'){
        count++
        console.log(count);
        if(count === 3){
            arrayString[i] = arrayString[i].replace('AWS' , 'amazone web services')
        }
    }
}


console.log(49 , arrayString.join(' '));