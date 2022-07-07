// Bài 1:
// Hãy viết 1 function có tham só đầu vào là 1 array và 1 callback trong đó kết quả trả về
// là trong array nhập vào có các giá trị nào xuất hiện và giá trị đó được lặp lại mấy lần

var array = [1,4,2,4,5,7,8,3,6,4,9,1,6,5]

function locTrung(input){
    var array = []
    for(var i = 0 ; i < input.length ; i++){
        if(array.indexOf(input[i]) === -1){
            array.push(input[i]);
        }
    }
    return array
}


function ketQua(input , callBack) {
    for (let i = 0; i < callBack(input).length; i++) {
        const elementcallBack = callBack(input)[i];
        var count = 0;
        for (let j = 0; j < input.length; j++) {
            const element = input[j];
            if(elementcallBack === element){
                count++
            }
        }
        console.log({phanTu: elementcallBack , soLanLap:count});
    }
}

ketQua(array , locTrung)