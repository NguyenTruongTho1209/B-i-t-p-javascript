/**
 * B7
Tính tiền điện 
Từ 0 – 100 số điện giá 2000 1 số
Từ 101 – 200 giá 3000 1 số
Từ 201 - 300 giá 4000 1 số
Từ 301- 500 giá 5000 1 số
Trên 500 giá 10000 1 số
A, dùng if else tính tiền điện 
 */

var soDien = 600;
var tienDien = 0;
if(soDien > 0 && soDien <= 100){
    tienDien = soDien*2000
}else if(soDien > 100){
    tienDien = 100*2000 + (soDien - 100)*3000;
}else if(soDien > 200){
    tienDien = 100*2000 + 100*3000 + (soDien - 200)*4000
}else if(soDien > 300){
    tienDien = 100*2000 + 100*3000 + 100*4000 + (soDien- 300)*5000
}else if(soDien > 500){
    tienDien = 100*2000 + 100*3000 + 100*4000 + 100*5000 + (soDien - 500)*10000;
}
console.log(tienDien);

