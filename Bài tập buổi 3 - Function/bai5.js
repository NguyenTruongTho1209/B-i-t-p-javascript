/**
 * 
Bài 5 : 
var listStudent = [{
    name: 'Khải',
    gender: 'boy',
    age: 21,
    address: 'Hà Nội'
}, {
    name: 'Văn anh',
    gender: 'boy',
    age: 22,
    address: 'Hà Bắc'
}, , {
    name: 'Phương',
    gender: 'boy',
    age: 23,
    address: 'Hà Nam'
}]
a ) Hãy viết function để sắp xếp theo độ tuổi tăng dần 
b ) Viết function tìm kiếm theo tên của học sinh . 
c ) Viết function tìm kiếm theo địa chỉ học viên 

 */

 var listStudent = [{
    name: 'Khải',
    gender: 'boy',
    age: 21,
    address: 'Hà Nội'
}, {
    name: 'Văn anh',
    gender: 'boy',
    age: 22,
    address: 'Hà Bắc'
},{
    name: 'Phương',
    gender: 'boy',
    age: 23,
    address: 'Hà Nam'
}]

function sortAge (Array){
    for(var i = 0 ; i < Array.length ; i++){
        for(var j = i + 1; j < Array.length ; j++){
            if(Array[i].age > Array[j].age){
                var temp = Array[i].age;
                Array[i].age = Array[j].age;
                Array[j].age = temp;
            }
        }
    }
    return Array
}

console.log(sortAge(listStudent));

function searchName (Name , Array){
    for(var i = 0 ; i < Array.length ; i++){
        if(Name == Array[i].name){
            console.log(Array[i]);
        }
    }
}

searchName('Khải' , listStudent);

// c
function searchAddress (Address , Array){
    for(var i = 0 ; i < Array.length ; i++){
        if(Address == Array[i].address){
            console.log(Array[i]);
        }
    }
}

searchAddress('Hà Bắc' , listStudent)