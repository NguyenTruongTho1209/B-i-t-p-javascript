/**
 * Bài   5:    
var  hoaQua = [
	{ten:”Xoài”,sx:”China”,sl:”100”},
	{ten:”Xoài”,sx:”VietNam”,sl:”130”},
	{ten:”Xoài”,sx:”ThaiLan”,sl:”100”},
	{ten:”Cam”,sx:”China”,sl:”200”},
    {ten:”Cam”,sx:”ThaiLan”,sl:”150”},
    {ten:”Nho”,sx:”VietNam”,sl:”120”},
    {ten:”Xoài”,sx:”ThaiLan”,sl:”100”},
]

a ) Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam . 
b ) Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 . 
c ) Viết function lọc sản phẩm hoa quả  theo tên  .  
d) Viết function lọc sản phẩm hoa quả  theo Nước .  
e ) viết function tính tổng số lượng theo tên Hoa quả , và theo tên nước . 

 */

var  hoaQua = [
	{ten:'Xoài',sx:'China',sl:'100'},
	{ten:'Xoài',sx:'VietNam',sl:'130'},
	{ten:'Xoài',sx:'ThaiLan',sl:'100'},
	{ten:'Cam',sx:'China',sl:'200'},
    {ten:'Cam',sx:'ThaiLan',sl:'150'},
    {ten:'Nho',sx:'VietNam',sl:'120'},
    {ten:'Xoài',sx:'ThaiLan',sl:'100'},
]

// a
var noiSanXuat = hoaQua.filter(function(value){
    if(value.sx == 'VietNam'){
        return true
    }
})

console.log(noiSanXuat);

// b
var soLuong = hoaQua.filter(function(value){
    if(value.sl >= 150){
        return true
    }
})

console.log(soLuong);

// c
// function nameFruit (input , name){
//     var loaiHoaQua = []
//     for(var i = 0 ; i < input.length ; i++){
//         if(input[i].ten == name){
//             loaiHoaQua.push(input[i])
//         }
//     }
//     return loaiHoaQua
// }
// console.log(nameFruit(hoaQua , 'Xoài'));
function nameFruit (input , name){
    var loaiHoaQua = input.filter(function(value){
        if(value.ten == name){
            return true
        }
    })
    return loaiHoaQua
}

console.log(69 , nameFruit(hoaQua , 'Xoài'));

// d
function nameCountruy (input , name){
    var loaiHoaQua = input.filter(function(value){
        if(value.sx == name){
            return true
        }
    })
    return loaiHoaQua
}
console.log(80 , nameCountruy(hoaQua , 'VietNam'));
// e
function sumFruit (input , name){
    var tong = 0
    var loaiHoaQua = input.filter(function(value){
        if(value.sx == name){
            tong += parseInt(value.sl)
        }
    })
    return tong
}
console.log(91, 'số lượng hoa quả tại nước Việt Nam là :' , sumFruit(hoaQua , 'VietNam'));



