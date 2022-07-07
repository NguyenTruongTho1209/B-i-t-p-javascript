/**
 * 
 * Bài 5:
 * Khai báo biến tienLuong là số lương của nhân viên  . 
Tính tiên thuế và thu nhập thật của nhân viên  , biết rằng :
30% thuế thu nhập nếu lương là > 80 triệu.
20% thuế thu nhập nếu lương từ 20 đến 80 triệu.
10% thuế thu nhập nếu lương  <  20 triệu.
Thu nhập thật  = tienLuong - thuế .. 
 */

var tienLuong = 7000000;

console.log(
    tienLuong > 80000000 ? 
    `Thuế thu nhập là : ${30*tienLuong/100} 
    Thu nhập thật là : ${tienLuong - (30*tienLuong/100)}` : (
        tienLuong >= 20000000 && tienLuong <= 80000000 ? 
        `Thuế thu nhập là : ${20*tienLuong/100}
        Thu nhập thật là : ${tienLuong - (20*tienLuong/100)}` : (
            tienLuong <= 20000000 ? 
            `Thuế thu nhập là : ${10*tienLuong/100}
            Thu nhập thật là : ${tienLuong - (10*tienLuong/100)}` : 'Nhân viên không có thu nhập')));

// sử dụn if else
if(tienLuong > 80000000){
    console.log(
        `Thuế thu nhập là : ${30*tienLuong/100} 
        Thu nhập thật là : ${tienLuong - (30*tienLuong/100)}`
    );
}else if(tienLuong >= 20000000 && tienLuong <= 80000000){
    console.log(
        `Thuế thu nhập là : ${20*tienLuong/100}
        Thu nhập thật là : ${tienLuong - (20*tienLuong/100)}`
    );
}else if (tienLuong <= 20000000) {
    console.log(
        `Thuế thu nhập là : ${10*tienLuong/100}
        Thu nhập thật là : ${tienLuong - (10*tienLuong/100)}`
    );
}else{
    console.log('Nhân viên không có thu nhập');
}