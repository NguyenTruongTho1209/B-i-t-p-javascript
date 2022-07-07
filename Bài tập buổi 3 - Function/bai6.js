/**
 * Bài 6 : 
Viết 1 function nhập vào giá trị của 2 điểm a và b  
Hãy tính khoảng cách giữa 2 điểm a và b trong hệ tọa độ OXY và OXYZ 
 */

function OXY (a1 , a2 , b1, b2){
    var khoangCach = 0;
    khoangCach = ((a1 - a2)**2 + (b1 - b2)**2)**(1/2)

    return khoangCach
}

console.log(OXY(1,2,3,4));

function OXYZ (a1 , a2 , a3 , b1, b2 , b3){
    var khoangCach = 0;
    khoangCach = ((a1 - a2)**2 + (b1 - b2)**2 + (a3 - b3)**2)**(1/2)

    return khoangCach
}
console.log(OXYZ(1,2,3,4,5,6));