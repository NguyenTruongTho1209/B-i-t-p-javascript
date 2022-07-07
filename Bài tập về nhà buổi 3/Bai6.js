/**
 * Bài 6: cho data = [3,2,4,1,8,7]
a, sắp xếp array data tăng dần
b, sắp xếp array data giảm dần
 */

var array6 = [3,2,4,1,8,7];


// a

for(var i = 0 ; i < array6.length; i++){
    for(var j = i + 1; j < array6.length ; j++){
        if(array6[i] > array6[j]){
            var tang = array6[i];
            array6[i] = array6[j];
            array6[j] = tang;
        }
    }
}
console.log(`array sau khi sắp xếp tăng dần : ${array6}`)

// b
var giam;
for (var i = 0 ; i < array6.length ; i++){
    for(var j = i + 1 ; j < array6.length ; j++){
        if(array6[i] < array6[j]){
            giam = array6[i];
            array6[i] = array6[j];
            array6[j] = giam;
        }
    }
}

console.log(`array sau khi sắp xếp giảm dần : ${array6}`);