/**
 * B9

var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]
hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
// kết quả: [
{phanTu: 1, lapLai: 2},
{phanTu: 2, lapLai: 2},
{phanTu: 3, lapLai: 3},
  ……

]
 */

var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]

function lapLai(input){
    var array = []
    for(var i = 0 ; i < input.length ; i++){
        if(array.indexOf(input[i]) === -1){
            array.push(input[i]);
        }
    }
    return array
}


function obj (input){
    for (let i = 0; i < lapLai(input).length; i++) {
        const elementLapLai = lapLai(input)[i];
        var count = 0;
        for (let j = 0; j < input.length; j++) {
            const element = input[j];
            if(elementLapLai === element){
                count++
            }
        }
        console.log({phanTu: elementLapLai , lapLai:count});
    }
}

obj(data);
