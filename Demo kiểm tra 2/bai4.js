/**
 * Bài 4 : 
var  iphone= [
{id: 1, product:'Iphone 12 ', price: 9990000, store: 120, color:'red'},
{id: 2, product:'Iphone 12 ', price: 12590000, store: 121, color:'black'},
{id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
{id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
{id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
{id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
{id: 7, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
{id: 8, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
{id: 9, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
] 
a ) Viết function tìm sản phẩm tìm kiếm sản phẩm theo tên . nếu không tìm thấy thì in ra “ Không tìm thấy “
b ) viết function tìm kiếm sản phẩm theo tên và theo màu .   nếu không tìm thấy thì in ra “ không tìm thấy  “ .
c ) Viết function tìm kiếm sản phẩm theo khoảng giá .10-15tr , 
Ví dụ người dùng tìm kiếm sản phẩm từ 10 đến 15 tr thì in ra các sản phẩm từ 10 đến 15 tr .. 

 */
var  iphone= [
    {id: 1, product:'Iphone 12', price: 9990000, store: 120, color:'red'},
    {id: 2, product:'Iphone 12', price: 12590000, store: 121, color:'black'},
    {id: 3, product:'Iphone 12', price: 13590000, store: 120, color:'green'},
    {id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
    {id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
    {id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
    {id: 7, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
    {id: 8, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
    {id: 9, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
    ] 

// a
function findNameIphone (input , nameIphone){
    var count = 0;
    var newData = []
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(element.product === nameIphone){
            newData.push(element)
            count++
        }
    }
    if(count === 0){
        newData = 'Không tìm thấy'
    }
    return newData
}

console.log(findNameIphone(iphone , 'iphone 1'));

// b
function findNameAndColor (input , nameIphone , colorIphone){
    var count = 0;
    var newData = []
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(element.product === nameIphone){
            if(element.color === colorIphone){
                newData.push(element)
                count++
            }
        }
    }
    if(count === 0){
        newData = 'Không tìm thấy'
    }
    return newData
}
console.log(findNameAndColor(iphone , 'Iphone 12' , 'blue'));

// c
function findPrice (input){
    var newData = []
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if(element.price > 10000000 && element.price < 15000000){
            newData.push(element)
        }
    }
    return newData
}
console.log(findPrice(iphone));
