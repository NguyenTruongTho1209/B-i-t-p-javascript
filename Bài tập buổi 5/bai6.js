/**
 * B6
var data = [1,2,3,1,2,3,4,5,6,5,4,6]
// viết function có dầu vào là array và return ra array mới chứa các phần tử của array đầu vào không lặp lại
 */
var data6 = [1,2,3,1,2,3,4,5,6,5,4,6]

function trungLap (input){
    var newArray = [];

    for(var i = 0 ; i < input.length ; i++){
        if(newArray.indexOf(input[i]) === -1){
            newArray.push(input[i])
        }
    }
    return newArray 
}

console.log(trungLap(data6));