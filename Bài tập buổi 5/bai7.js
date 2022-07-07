/**
 * B7

var hocSinh=[

{ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
{ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
{ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
]

var khoiThi = [

{khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
{khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
{khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
]
hãy tính điểm thi của từng học sinh biết tổng điểm = điểm thi * hệ số
hệ số sẽ thay đổi theo khối thi và môn thi
hoc sinh thi đỗ nếu điểm thi >= điểm sàn của khối tương ứng
hãy cho biết ai thi đỗ, ai thi trượt
 */

var hocSinh=[

    {ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
    {ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
    {ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
    ]
    
    var khoiThi = [
        
    {khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
    {khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
    {khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
    ]
    

// function tongDiem (input , input2){
//     for(var i = 0 ; i < input.length ; i++){
//         for(var j = 0 ; j < input2.length ; j++){
//             if(input[i].khoi == input2[j].khoi){
//                 input[i].diemTong = input[i].diem.toan*input2[j].heSo.toan +  input[i].diem.van*input2[j].heSo.van + input[i].diem.anh*input2[j].heSo.anh 
//             }
//         }
//     }
//     return input
// }
// console.log(48 ,tongDiem(hocSinh , khoiThi));

var tongDiem = hocSinh.map(function(value){
    for(var i = 0 ; i < khoiThi.length ; i++){
        if(value.khoi == khoiThi[i].khoi){
            value.diemTong = value.diem.toan*khoiThi[i].heSo.toan +  value.diem.van*khoiThi[i].heSo.van + value.diem.anh*khoiThi[i].heSo.anh
        }
    }
    return value
})
console.log(58 , tongDiem);

// function ketQua (input1 , input2){
//     for(var i = 0 ; i < input1.length ; i++){
//         for(var j = 0 ; j < input2.length ; j++){
//             if(input1[i].khoi === input2[j].khoi){
//                 if(input1[i].diemTong >= input2[j].diemSan){
//                     input1[i].ketQua = 'Đỗ'
//                 }else{
//                     input1[i].ketQua = 'Trượt'
//                 }
//             }
//         }
//     }
//     return input1
// }
// console.log(64 , ketQua(hocSinh , khoiThi));
function log(value){
    console.log(value);
}
var ketQuaThi = hocSinh.map(function(value){
    for(var i = 0 ; i < khoiThi.length ; i++){
        if(value.khoi === khoiThi[i].khoi){
            if(value.diemTong >= khoiThi[i].diemSan){
                value.ketQua = 'Đỗ'
            }else{
                value.ketQua = 'Trượt'
            }
        }
    }
    return value
})
console.log(90 , ketQuaThi);