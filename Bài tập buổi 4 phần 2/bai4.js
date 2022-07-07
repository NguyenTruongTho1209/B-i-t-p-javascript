/**
 * Bài 4 :  
var LOL =[
{ name:'yasuo', power: 50000,viTri:'Mid'},
{ name:'aphelios', power: 43000,viTri:'ADC'},
{ name:'Yone', power: 45000,viTri:'Mid'},
{ name:'Vayle', power: 12000,viTri:'ADC'},
{ name:'Nasus', power: 30000,viTri:'Top'},
{ name:'Jayce', power: 20000,viTri:'Top'},

{ name:'LeeSin', power: 41000,viTri:'Jungle'},
{ name:'Nunu', power: 15000,viTri:'Jungle'},
{ name:'Threst', power: 23000,viTri:'SP'},
{ name:'Lulu', power: 25000,viTri:'SP'},
]
a ) Viết function tìm tướng theo tên .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng của bạn  “ 
b ) Viết function tìm tướng theo Vị trí .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng của bạn  “ 
c )  Viết function tính tổng sức mạnh của 2 tướng bất kỳ  . 
d ) Viết function tính tổng của một đội 5 tướng.
d tính tổng sức mạnh của 5 tướng
 */

var LOL =[
    { name:'yasuo', power: 50000,viTri:'Mid'},
    { name:'aphelios', power: 43000,viTri:'ADC'},
    { name:'Yone', power: 45000,viTri:'Mid'},
    { name:'Vayle', power: 12000,viTri:'ADC'},
    { name:'Nasus', power: 30000,viTri:'Top'},
    { name:'Jayce', power: 20000,viTri:'Top'},
    { name:'LeeSin', power: 41000,viTri:'Jungle'},
    { name:'Nunu', power: 15000,viTri:'Jungle'},
    { name:'Threst', power: 23000,viTri:'SP'},
    { name:'Lulu', power: 25000,viTri:'SP'},
    ]

    // a
function findChampion (input , nameChampion){
    var champion = []
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].name == nameChampion){
            champion[champion.length] = input[i]
        }
    }
    return champion.length > 0 ? champion : 'Không tìm thấy tướng'
}
console.log(46 , findChampion(LOL , 'Lulu'));

// b
function findLane (input , lane){
    var champion = []
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].viTri == lane){
            champion[champion.length] = input[i]
        }
    }
    return champion.length > 0 ? champion : 'Không tìm thấy tướng'
}
console.log(58, findLane(LOL , 'ADC'));

// c
function sumPower(input , nameChampion1 , nameChampion2){
    var sum = 0 ;
    for(var i = 0 ; i < input.length ; i++){
        for(var j = 0 ; j < input.length ; j++){
            if(input[i].name == nameChampion1 && input[j].name == nameChampion2){
                sum = input[i].power + input[j].power
            }
        }
    }
    return sum
}

console.log(73 , 'Tổng sức mạnh của 2 vị tướng là : ' + sumPower(LOL , 'yasuo' , 'Vayle'));

// d
var champion = []
function findPowerChampoin(input , nameChampion , array){
    for (let i = 0; i < input.length; i++) {
        const infoChampion = input[i];
        if(infoChampion.name == nameChampion){
            array[array.length] = infoChampion
        }
    }

}
findPowerChampoin(LOL , 'yasuo' , champion);
findPowerChampoin(LOL , 'Yone' , champion);
findPowerChampoin(LOL , 'Nunu' , champion);
findPowerChampoin(LOL , 'Lulu' , champion);
findPowerChampoin(LOL , 'Nasus' , champion);
console.log(champion);
function tinhTong (input){
    var sum = 0
    for(var i = 0 ; i < input.length ; i++){
        sum = sum + input[i].power
    }
    return sum
}
console.log('Tổng sức mạnh của 5 tướng là : ' ,tinhTong(champion));

