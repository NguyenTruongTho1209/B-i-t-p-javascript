/**
 * bai 6:
cho array [4,6,8,8,7,6,2,1,3,5,7,9,5,1,3]

hãy cho biết mỗi phần tử trong array trên lặp lại bao nhiêu lần
// kq [{so: 4, lapLai:1}, {so: 6, lapLai:2}, {so: 8, lapLai:2}, ….]
 */
var array = [4,6,8,8,7,6,2,1,3,5,7,9,5,1,3];
var ketQua = []
for(var i = 0 ; i < array.length;i++){
    var count = 0
    for(var j = 0 ; j < array.length ; j++){
        if(array[i] == array[j]){
            count++
        }
    }
    ketQua[ketQua.length] = {so:array[i] , lanLap: count}
}

// for(var i = 0 ; i < ketQua.length ; i++){
//     for(var j = 0 ; j < ketQua.length ; j++){
//         if(ketQua[i].so == ketQua[j].so){
            
//         }
//     }
// }
// console.log(ketQua);
