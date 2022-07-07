/**
 * Bài 4 : Sử dụng for of

var luong = [
    {
        ten:'Anh',
        luong:1000
    },
    {
        ten:'Duy',
        luong:2000
    },
    {
        ten:'Thai',
        luong:4000
    }
]

a )Tính tổng luong của Anh , Duy  và Thái .
b )Tìm xem lương của ai lớn nhất , lương của au nhỏ nhất  .  
c ) Sắp xếp thứ tự theo lương 

 */

var luong = [
    {
        ten:'Anh',
        luong:1000
    },
    {
        ten:'Duy',
        luong:2000
    },
    {
        ten:'Thai',
        luong:4000
    }
]

// a
var tongLuong = 0
for (var key in luong) {
    tongLuong = tongLuong + luong[key].luong;
}
console.log(45, 'Tổng lương của Anh , Duy và Thái là : ' + tongLuong);

// b
var maxLuong =[];
maxLuong[maxLuong.length] = luong[0];
var max = luong[0].luong;
for(var i = 0 ; i < luong.length ; i++){
    if(max < luong[i].luong){
        maxLuong[0]=luong[i]
    }
}
console.log(58 ,'Người có số lương cao nhất là : ');
console.log(maxLuong);

var minLuong = maxLuong;
var min = luong[0].luong
for(var i = 0 ; i < luong.length ; i++){
    if(min >= luong[i].luong){
        minLuong[0] = luong[i]
    }
}
console.log(66 , 'Người có số lương thấp nhất là : ');
console.log(minLuong);

// c
 for(var i = 0 ; i < luong.length ; i++){
     for(var j = i + 1 ; j < luong.length ; j++){
         if(luong[i].luong < luong[j].luong){
             var sapXep = luong[i];
             luong[i]= luong[j];
             luong[j] = sapXep;
         }
     }
 }
 console.log(luong);