/**
 * Bài 2 : 
var  iphone= [
{id: 1, product:'Iphone 12 ', price: 9990000, store: 120, color:'red'},
{id: 2, product:'Iphone 12 ', price: 12590000, store: 121, color:'black'},
{id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
{id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
{id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
{id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
{id: 3, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
{id: 3, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
{id: 3, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
] 

a ) Viết function tìm sản phẩm tìm kiếm sản phẩm theo tên . nếu không tìm thấy thì in ra “ Không tìm thấy “
b ) viết function tìm kiếm sản phẩm theo tên và theo màu .   nếu không tìm thấy thì in ra “ không tìm thấy  “ .
c ) Viết function tìm kiếm sản phẩm theo khoảng giá .10-15tr , 
Ví dụ người dùng tìm kiếm sản phẩm từ 10 đến 15 tr thì in ra các sản phẩm từ 10 đến 15 tr ..
 */
var  iphone= [
    {id: 1, product:'Iphone 12 ', price: 9990000, store: 120, color:'red'},
    {id: 2, product:'Iphone 12 ', price: 12590000, store: 121, color:'black'},
    {id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
    {id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
    {id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
    {id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
    {id: 3, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
    {id: 3, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
    {id: 3, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
    ] 

// a
function searchName (input , name){
    var string = [];
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].product == name){
            string[string.length] = input[i]
        }
    }
    return string.length > 0 ? string : 'Không tìm thấy sản phẩm'
}

console.log(43 , searchName(iphone , 'iphone 13 d'));

// b
function nameAndColor (input , name , nameColor){
    var string = [];
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].product == name && input[i].color == nameColor){
            string[string.length] = input[i]
        }
    }
    return string.length > 0 ? string : 'Không tìm thấy sản phẩm'
}
console.log(55 ,nameAndColor(iphone , 'iphone 13' , 'blue'));

// c
function searcPrice (input){
    var string = [];
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].price < 15000000 && input[i].price > 10000000 ){
            string[string.length] = input[i]
        }
    }
    return string.length > 0 ? string : 'Không tìm thấy sản phẩm'
}
console.log(67, searcPrice(iphone));