/**
 * var TFT= [
{ name:'yasuo', price: 5, toc:['Độc hành','Anh em']},
{ name:'yone', price: 5, toc:['Độc hành','Anh em']},
{ name:'lux', price: 7, toc:['Học giả','Tối thượng']},
{ name:'Braum', price: 4, toc:['Vệ sĩ','Băng đảng']},
{ name:'cho'gat', price: 3, toc:['Khổng lồ','Đột biến']},
{ name:'Galio', price: 5, toc:['Khổng lồ','vệ sĩ']},
{ name:'Ahri', price: 4, toc:['Pháp sư','Băng đảng']},
{ name:'Diana', price: 1, toc:['Băng đảng','Sát thủ']},
]
a ) Viết function tìm tướng theo Tên . Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
b ) Viết function theo giá tiền .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
c ) Viết function tìm kiếm tướng theo tộc . “ Không tìm thấy in ra không tìm thấy  “
 */

var TFT= [
    { name:'yasuo', price: 5, toc:['Độc hành','Anh em']},
    { name:'yone', price: 5, toc:['Độc hành','Anh em']},
    { name:'lux', price: 7, toc:['Học giả','Tối thượng']},
    { name:'Braum', price: 4, toc:['Vệ sĩ','Băng đảng']},
    { name:'cho gat', price: 3, toc:['Khổng lồ','Đột biến']},
    { name:'Galio', price: 5, toc:['Khổng lồ','vệ sĩ']},
    { name:'Ahri', price: 4, toc:['Pháp sư','Băng đảng']},
    { name:'Diana', price: 1, toc:['Băng đảng','Sát thủ']},
    ]

// a
function findChampion(input , nameChampion){
    var champion = []
    for(var i = 0 ;i < input.length ; i++){
        if(input[i].name === nameChampion){
            champion[champion.length] = input[i]
        }
    }
    return champion.length > 0 ? champion : 'Không tìm thấy tướng bạn cần'
}
console.log(findChampion(TFT , 'yasuo'));

// b
function findMoney (input , money){
    var champion = []
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].price == money){
            champion[champion.length] = input[i]
        }
    }
    return champion.length > 0 ? champion : 'Không tìm thấy tướng bạn cần'
}

console.log(findMoney(TFT , 5));

// c
function findType (input , type){
    var champion = []
    for(var i = 0 ; i< input.length ; i++){
        for(var j = 0 ; j < input[i].toc.length ; j++){
            if(input[i].toc[j] == type){
                champion[champion.length] = input[i]
            }
        }
    }
    return champion.length > 0 ? champion : 'Không tìm thấy tướng bạn cần'
}

console.log( 66 ,findType(TFT , 'Anh em'));