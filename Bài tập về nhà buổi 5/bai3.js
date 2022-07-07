/**
 * B3
var data = [1,2,3,1,2,3,4,5,6,5,4,6]
// viết function có dầu vào là array và return ra array mới chứa các phần tử của array đầu và không lặp lại
 */

var array3 = [1,2,3,1,2,3,4,5,6,5,4,6]

function trungLap (input){
    var array = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(array.indexOf(element) === -1){
            array.push(element)
        }
    }
    return array
}
console.log(trungLap(array3));