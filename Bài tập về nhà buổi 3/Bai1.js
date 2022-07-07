/**
 * Bài 1: cho array = [1,5,7,8,9,15,8]

1.1 in ra các số chẵn của mảng
1.2 in ra các số lẻ của mảng
1.3 in ra các số lớn hơn hoặc bằng 5 của mảng
1.4 Cộng tổng các số chia hết cho 5 của mảng
1.5 Tìm ra tích 3 số đầu của mảng array	
1.6 Tính tổng 3 phần tử cuối của mảng
1.7 Tìm xem trong array có phần tử nào là số 5 không?
1.8 Đếm số phần tử = 8 trong mảng;

 */

array = [1,5,7,8,9,15,8];

// 1.1
console.log('Các số chẵn của mảng là : ');
for (var i = 0 ; i < array.length ; i++){
    if (array[i] % 2 == 0){
        console.log(array[i]);
    }
}

console.log('Các số lẻ của mảng là : ');
// 1.2
for (var i = 0 ; i < array.length ; i++){
    if (array[i] % 2 !== 0){
        console.log(array[i]);
    }
}

// 1.3
console.log('Các số lơn hơn hoặc bằng 5 trong mảng là : ');
for (var i = 0 ; i < array.length ; i++){
    if (array[i] >= 5){
        console.log(array[i]);
    }
}

// 1.4
var tong = 0;
for (var i = 0 ; i < array.length ; i++){
    if (array[i] % 5 == 0){
        tong = tong + array[i]
    }
}
console.log(`Tổng các số chia hết cho 5 trong mảng là : ${tong}`);

// 1.5
var tich = 1;
for (var i = 0 ; i < array.length ; i++){
    if (i <= 2){
        tich = tich * array[i];
    }
}
console.log(`Tích của 3 phần tử đầu trong array là : ${tich}`);

// 1.6
var tongCuoi = 0;
for (var i = 0 ; i < array.length ; i++){
    if (i > 3 ){
        tongCuoi = tongCuoi + array[i];
    }
}
console.log(`Tổng 3 phần tử cuối của mảng là : ${tongCuoi}`);

// 1.7
for( var i = 0 ; i < array.length ; i++) {
    if(array[i] === 5){
        console.log(array[i]);
    }
}

// 1.8
var demSo = 0;
for (var i = 0 ; i < array.length ; i++) {
    if(array[i] === 8){
        demSo++;
    }
}
console.log('số phần tử bằng 8 trong mảng là : ' + demSo);

