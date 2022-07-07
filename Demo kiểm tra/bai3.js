/**
 * Bài 3 : 

Cho array sau  : 
var arr =[1,2,'Nam','Hải',5,8, 'Huy' ,3,6,'Nấm',5,8,'Huy' ,'Nấm''Nam','Hải','6','9'] ; 

a, hãy lọc trùng array trên để các phần tử bên trong chỉ hiển thị 1 lần, không lặp lại . 
b ) Hãy tính tổng các phần tử trong array , tính cả string và number

 */
var arr =[1,2,'Nam','Hải',5,8, 'Huy' ,3,6,'Nấm',5,8,'Huy' ,'Nấm','Nam','Hải','6','9'] ; 
function trungLap (input){
    var newArray = []
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(newArray.indexOf(element) === -1){
            newArray.push(element)
        }
    }
    return newArray
}
console.log(trungLap(arr));

// b
var tong = 0
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(parseInt(element)){
        tong += parseInt(element)
    }
}
console.log(tong);