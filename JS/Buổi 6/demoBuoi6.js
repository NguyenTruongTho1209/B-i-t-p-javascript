var string = 'Nguyen Tho Nguyen'

var array = ['Le Thanh Tung' , 'Hoang Cong Minh' , 'Le Quang Dai' , 'Nguyen Le']

// hãy tìm những ngươi ho Le trong array trên

var findFistName = array.filter(function(value){
    if(value.indexOf('Le') === 0){
        return true
    }else{
        return false
    }
})
console.log(findFistName);

console.log(string.includes('Thai'));

var newString = string.replace(/Nguyen/gi , 'Truong')
console.log(newString);

string = '12/09/2000'
var newArray = string.split('/');

console.log(newArray);

var ten = 'nguyen truong tho'

// Nguyen Truong Tho

function updateName ( string){
    var array = [];
    array = string.split(' ')

    var newString = array.map(function(value){
        return value.replace(value[0] , value[0].toUpperCase())
    })

    return newString.join(' ')
}
console.log(updateName(ten));