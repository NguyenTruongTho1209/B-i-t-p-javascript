/**
 * Bài 6 : 
// Cho array = [1,2,3,5,1,2,4,5,3,4,1] chứa trạng thái sử dụng của xe đạp
// Với mỗi số 1,2,3,... là ứng với số của xe đạp được đưa ra khỏi trạm
// Hãy viết function để hiện ra xe chưa được đưa vào lại trạm.
// Lưu ý với số 1 xuất hiện 2 lần có nghĩa là xe số 1 đã được lấy khỏi trạm và được
// đưa lại về trạm . 

 */

var array6 = [1,2,3,5,1,2,4,5,3,4,1]

function lapLai (input){
    var array = [];
    for(var i = 0 ; i < input.length ; i++){
        if(array.indexOf(input[i]) === -1){
            array.push(input[i])
        }
    }
    return array
}

console.log(lapLai(array6));

function bikeOut (input){
    var bike = []
    for (let i = 0; i < lapLai(input).length; i++) {
        const elementLapLai = lapLai(input)[i];
        var count = 0;
        for (let j = 0; j < input.length; j++) {
            const element = input[j];
            if(elementLapLai === element){
                count++
            }
        }
        if(count % 2 !== 0){
            bike.push(elementLapLai)
        }
    }
    return bike
}

console.log('Những xe đang ở ngoài trạm là : ',bikeOut(array6));