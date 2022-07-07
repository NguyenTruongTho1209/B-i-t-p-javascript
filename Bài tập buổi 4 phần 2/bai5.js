/**
 * Bài 5 : 
var  hocSinh = [
{ name:'A', age:18,queQuan:'Hà Nội',maVung:'V001'},
{ name:'B', age:18,queQuan:'Tây Bắc',maVung:'V002'},
{ name:'C', age:19,queQuan:'Hưng Yên',maVung:'V003'},
{ name:'D', age:18,queQuan:'Thái Bình',maVung:'V003'},
]
var diemVung = [
{maVung:'V001',ten:['Hà Nội'],diem:2},
{maVung:'V002',ten:['Hà Giang','Tây Bắc','Mù Cang Trải'],diem:2.5},
{maVung:'V003',ten:['Thái Bình','Hưng Yên'],diem:1},
]

var diemThi= [
{name:'A', Toan:9, Van:6,anh:7},
{name:'B', Toan:1, Van:8,anh:9},
{name:'C', Toan:7, Van:6,anh:5},
{name:'D', Toan:7, Van:5,anh:7},
]
var truong = [
{ten:'Chu Văn An',diemChuan:25},
{ten:'Amsterdam',diemChuan:27},
{ten:'Nguyễn Du',diemChuan:23},
]
a ) Viết function truy vấn điểm vùng . theo mã Vùng . 
b ) Viết function truy vấn điểm vùng theo tên của học Sinh .
c ) Viết function tính điểm thi . theo tên của học sinh .
Biết rằng điểm tổng = Điểm Toán + Điểm Văn + Điểm Anh + Điểm Vùng .
d ) Viết function cho biết học sinh đỗ tốt nghiệp hay không . 
Biết rằng để tốt nghiệp  điểm tổng > = 15 và không có môn nào < = 1.. 
e ) Viết function cho biết học sinh đã đỗ trường nào  . theo tên của học sinh 

 */

var  hocSinh = [
    { name:'A', age:18,queQuan:'Hà Nội',maVung:'V001'},
    { name:'B', age:18,queQuan:'Tây Bắc',maVung:'V002'},
    { name:'C', age:19,queQuan:'Hưng Yên',maVung:'V003'},
    { name:'D', age:18,queQuan:'Thái Bình',maVung:'V003'},
    ]
var diemVung = [
    {maVung:'V001',ten:['Hà Nội'],diem:2},
    {maVung:'V002',ten:['Hà Giang','Tây Bắc','Mù Cang Trải'],diem:2.5},
    {maVung:'V003',ten:['Thái Bình','Hưng Yên'],diem:1},
    ]
    
var diemThi= [
    {name:'A', Toan:9, Van:6,anh:7},
    {name:'B', Toan:1, Van:8,anh:9},
    {name:'C', Toan:7, Van:6,anh:5},
    {name:'D', Toan:7, Van:5,anh:7},
    ]
var truong = [
    {ten:'Chu Văn An',diemChuan:25},
    {ten:'Amsterdam',diemChuan:27},
    {ten:'Nguyễn Du',diemChuan:23},
    ]
// a
function poinAreaCode (input , areaCode){
    var areaPoin = [];
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].maVung == areaCode){
            areaPoin[areaPoin.length] = input[i]
        }
    }
    return areaPoin.length > 0 ? areaPoin : 0
}

console.log(70 , poinAreaCode(diemVung , 'V001'));

// b 
function poinAreaStudent (input , input2, nameStudent){
    var poinStudent = [];
    var areaPoin = [];
    for(var i = 0 ; i < input.length ; i++){
        if(input[i].name == nameStudent){
            poinStudent[poinStudent.length] = input[i]
        }
    }
    for(var i = 0 ; i < poinStudent.length ; i++){
        for(var j = 0 ; j < input2.length ; j++){
            if(poinStudent[i].maVung == input2[j].maVung){
                areaPoin[areaPoin.length] = input2[j]
            }
        }
    }
    return areaPoin.length > 0 ? areaPoin : 0
}

console.log( 89 , poinAreaStudent(hocSinh , diemVung , 'A'));

// c
function sumPoin (input1 , input2 ,nameStudent ){
    var tongDiem = 0
    for(value of input1){
        for(data of input2){
          for(number of diemVung){
            if(value.name == nameStudent && data.name == nameStudent && value.maVung == number.maVung ){
              tongDiem += data.Toan + data.Van + data.anh + number.diem;
            }
          }
        }
      }
      return tongDiem;
}

console.log(104 ,'Tổng điểm của học sinh là : '+ sumPoin(hocSinh, diemThi , 'A'));

// d
function checkPass(input1 , input2 , nameStudent){
    var poinStudent = [];
    for(var i = 0 ; i < input2.length ; i++){
        if(input2[i].name == nameStudent){
            poinStudent[poinStudent.length] = input2[i]
        }
    }

    for(var i = 0 ; i < poinStudent.length ; i++){
        if(poinStudent[i].Toan <= 1 || poinStudent[i].Van <= 1 || poinStudent[i].anh <= 1){
            console.log('Học sinh không đỗ tốt nghiệp');
        }
    }


    if(sumPoin(input1 , input2 , nameStudent) >= 15){
        console.log('Học sinh đã đỗ tốt nghiệp');
    }else{
        console.log('Học sinh không đỗ tốt nghiệp');
    }
}

checkPass(hocSinh ,diemThi , 'A')

// e
function checkPoin (input , nameStudent , diemThi , diemTruong){
    var check = [];
    for(var i = 0 ; i < diemTruong.length ; i++){
        if(sumPoin(input , diemThi , nameStudent) >= diemTruong[i].diemChuan){
            check[check.length] = diemTruong[i]
        }
    }
    return check;
}

console.log(121 , checkPoin(hocSinh , 'A' , diemThi , truong));
