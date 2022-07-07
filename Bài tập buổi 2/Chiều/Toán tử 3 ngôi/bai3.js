/**
 * Bài 3 :Khai báo 1 số x . 
a ) kiểm tra số x là số âm hay số dương , rồi in ra dưới dạng sau : 
` Số $(x) là số âm ( hoặc dương) ` 
b ) kiểm tra xem số x có phải số nguyên không  . rồi in ra dưới dạng sau :
` Số $(x) là số  nguyên ( số thập phân )  `
 */

var x = 0;

// a
console.log(x > 0 ? `Số ${x} là số dương ` : (x < 0 ? `Số ${x} là số âm ` : 0));

// sử dụng if else
if(x > 0) {
    console.log(`Số ${x} là số dương `);
}else if (x < 0) {
    console.log(`Số ${x} là số âm `);
}else{
    console.log('x là số 0');
}

// b
console.log(x%1 == 0 ? `Số ${x} là số nguyên` : (x%1 !== 0 ? `Số ${x} là số thập phân` : 0));

// sử dụng if else

if(x%1 == 0){
    console.log(`Số ${x} là số nguyên`);
}else if(x%1 !== 0) {
    console.log(`Số ${x} là số thập phân`);
}