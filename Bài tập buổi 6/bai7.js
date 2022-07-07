/**
 * Bài 7

var hocSinh = [
{name: 'Thai', age: 15,maSV:'A1001A',diemthi:{toan:8,van:7,anh:9}},
{name: 'Kien', age: 10,maSV:'B1001D',diemthi:{toan:6,van:6,anh:9}},
{name: 'Linh', age: 12,maSV:'C1001C',diemthi:{toan:8,van:7,anh:7}},
{name: 'Tung', age: 11,maSV:'A1002B',diemthi:{toan:7,van:6,anh:9}},
{name: 'Thinh', age: 16,maSV:'B1002A',diemthi:{toan:5,van:7,anh:7}},
{name: 'Thuan', age: 13,maSV:'C1003C',diemthi:{toan:7,van:7,anh:7}},
{name: 'Hai', age: 13,maSV:'C1002B',diemthi:{toan:8,van:7,anh:6}},
]

var lop =[
{{name: 'A1', loai:'Lớp chọn'},
{{name: 'B1', loai:'Loại B'},
{{name: 'C1', Loai:'Loại C'},
]
var khoiThi = [
{{name: 'A', diem:22,heso:{toan:2,van:1,anh:1}},
{{name: 'B', diem:25,heso:{toan:1,van:2,anh:1}},
{{name: 'C', diem:21,heso:{toan:1,van:1,anh:2},
]

Ví dụ  maSV: A1001A 
A1 là tên lớp . 
001 là thứ tự của học sinh 
A là khối thi. . 

a ) Lọc các học sinh theo lớp  .  
b ) Lọc các học sinh theo Khối thi  .
c ) Tính tổng điểm của các học sinh .  cho biết học sinh đó đỗ hay trượt 
 */

var hocSinh = [
    {name: 'Thai', age: 15,maSV:'A1001A',diemthi:{toan:8,van:7,anh:9}},
    {name: 'Kien', age: 10,maSV:'B1001A',diemthi:{toan:6,van:6,anh:9}},
    {name: 'Linh', age: 12,maSV:'C1001C',diemthi:{toan:8,van:7,anh:7}},
    {name: 'Tung', age: 11,maSV:'A1002B',diemthi:{toan:7,van:6,anh:9}},
    {name: 'Thinh', age: 16,maSV:'B1002A',diemthi:{toan:5,van:7,anh:7}},
    {name: 'Thuan', age: 13,maSV:'C1003C',diemthi:{toan:7,van:7,anh:7}},
    {name: 'Hai', age: 13,maSV:'C1002B',diemthi:{toan:8,van:7,anh:6}},
    ]
    
    var lop =[
    {name: 'A1', loai:'Lớp chọn'},
    {name: 'B1', loai:'Loại B'},
    {name: 'C1', Loai:'Loại C'},
    ]
    var khoiThi = [
    {name: 'A', diem:22,heso:{toan:2,van:1,anh:1}},
    {name: 'B', diem:25,heso:{toan:1,van:2,anh:1}},
    {name: 'C', diem:21,heso:{toan:1,van:1,anh:2}},
    ]

// a

function findNameClass (input , name){
    var nameClass = input.filter(function(value){
        if(value.maSV.startsWith(name)){
            return true
        }
    })
    return nameClass
}

console.log(67 , findNameClass(hocSinh , 'A1'));

// b
function findNameGrade (input , name){
    var nameGrade = input.filter(function(value){
        if(value.maSV.endsWith(name)){
            return true
        }
    })
    return nameGrade
}

console.log(79 , findNameGrade(hocSinh , 'A'));

// c
var tongDiem = hocSinh.map(function(value){
    var grade = value.maSV.slice(value.maSV.length - 1 , value.maSV.length)
    for (let i = 0; i < khoiThi.length; i++) {
        const element = khoiThi[i];
        if(grade == element.name){
            value.diemTong = element.heso.toan * value.diemthi.toan + element.heso.van * value.diemthi.van + element.heso.anh * value.diemthi.anh
        }
    }
    return value
})
function ketQua (input1 , input2){
    var thongTin = input1.map(function(value){
        var grade = value.maSV.slice(value.maSV.length - 1)
        for (let i = 0; i < input2.length; i++) {
            const element = input2[i];
            if(grade == element.name){
                if(value.diemTong >= element.diem){
                    value.ketQua = 'Đỗ'
                }else{
                    value.ketQua = 'Trượt'
                }
            }
        }
        return value
    })
    return thongTin
}
console.log(107 , ketQua(tongDiem , khoiThi));