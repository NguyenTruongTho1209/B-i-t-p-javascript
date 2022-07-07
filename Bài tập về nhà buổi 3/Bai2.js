/**
 * Bài 2: cho var data = [3,2,4,1,8,7,1,10,1,2]

a, tính tổng các phần tử trong array
b, tính tích các phần từ trong array
c, tính tổng các số lẻ trong array
d, tính tích các số chẵn trong array
e, có mấy số 1 trong array, ở những vị trí nào
f, số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array
 */

var array2 = [3,2,4,1,8,7,1,10,1,2];

// a
var tong = 0;
for(var i = 0 ; i < array2.length ; i++) {
    tong = tong + array2[i];
}
console.log(`Tổng các phần tử trong array là : ${tong}`);

// b
var tich = 1;
for(var i = 0 ; i < array2.length ; i++) {
    tich = tich * array2[i];
}
console.log(`Tích các phần tử trong array là : ${tich}`);

// c
var tongLe = 0;
for(var i = 0 ; i < array2.length ; i++) {
    if(array2[i]%2 !== 0) {
        tongLe = tongLe + array2[i];
    }
}
console.log(`Tổng các số lẻ trong array là : ${tongLe}`);

// d
tich = 1;
for(var i = 0 ; i < array2.length ; i++) {
    if(array2[i]%2 == 0){
        tich = tich * array2[i];
    }
}
console.log(`Tích các só chẵn trong aray là : ${tich}`);

// e
tong = 0;
for(var i = 0 ; i < array2.length ; i++) {
    if(array2[i] == 1) {
        tong++;
    }
}

console.log(`Tổng số 1 trong array là : ${tong}`);
for(var i = 0 ; i < array2.length ; i++) {
    if(array2[i] === 1) {
        console.log('Tại vị trí ' + i);
    }
}

// f
for(var i = 0 ; i < array2.length ; i++){
    if(array2[i] == 1){
        console.log('Số 1 đầu tiên tại vị trí : ' + i);
        break
    }
}

for(var i = 0 ; i < array2.length ; i++){
    if(array2[array2.length - i] == 1) {
        console.log('Số 1 cuối cùng tại vị trí : ' + (array2.length - i));
        break
    }
}