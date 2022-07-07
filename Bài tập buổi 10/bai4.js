// Bài 2:
// Viết 1 function nhập vào giá trị của 2 điểm a và b  
// Hãy tính khoảng cách giữa 2 điểm a và b với tọa độ của a và b có giá trị của xOy

function OXY (a1 , a2 , b1, b2){
    var khoangCach = 0;
    khoangCach = ((a1 - a2)**2 + (b1 - b2)**2)**(1/2)

    return khoangCach
}