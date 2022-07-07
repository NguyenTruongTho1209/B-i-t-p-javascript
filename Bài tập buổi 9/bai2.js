/**
 * // Bài 2:  
Cho
ttSach = [
    {ten: 'Vuot len chinh minh', danhGia: 'A', nhaXB: 'Kim dong', ngayPhatHanh: '12/5/2018', giaNhap: 20000},
    {ten: 'Putin', danhGia: 'A', nhaXB: 'tuoi tre', ngayPhatHanh: '12/5/2019', giaNhap: 12000},
    {ten: 'Cach lam giau', danhGia: 'B', nhaXB: 'Kim dong', ngayPhatHanh: '16/6/2018', giaNhap: 15000},
    {ten: 'Cach de lam Vuong Tu', danhGia: 'C', nhaXB: 'tuoi tre', ngayPhatHanh: '8/8/2017', giaNhap: 30000},
    {ten: 'Cach de hack facebook', danhGia: 'B', nhaXB: 'Kim dong', ngayPhatHanh: '11/5/2019', giaNhap: 20000},
    {ten: 'ngay mai tuoi sang', danhGia: 'C', nhaXB: 'tuoi tre', ngayPhatHanh: '16/7/2018', giaNhap: 40000},
    {ten: 'Lam the nao de hieu 1 nguoi', danhGia: 'A', nhaXB: 'ban mai', ngayPhatHanh: '16/5/2017', giaNhap: 50000},
    {ten: 'cach tap gym', danhGia: 'B', nhaXB: 'tuoi tre', ngayPhatHanh: '13/4/2020', giaNhap: 30000},
]

nxBan = [
    {ten: 'Kim dong', chiPhi: 5000},
    {ten: 'tuoi tre', chiPhi: 15000},
    {ten: 'ban mai', chiPhi: 10000},
]

bienLai = [
    {tenCH: 'HCM',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:150},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:80},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'HN',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:150},
        {ten:'Putin', soLuong:100},
        {ten:'Cach lam giau', soLuong:80},
        {ten:'Cach de hack facebook', soLuong:80},
        {ten:'Cach de lam Vuong Tu', soLuong:80},
        {ten:'ngay mai tuoi sang', soLuong:60},
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:60},
    ]},
    {tenCH: 'SG',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:50},
        {ten:'Putin', soLuong:100},
        {ten:'ngay mai tuoi sang', soLuong:60},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'DN',
     sach:[
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:50},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:30},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'NA',
     sach:[
        {ten:'cach tap gym', soLuong:50},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:30},
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:20},
    ]},
]

mucTieu = [
    {danhGia: 'A', soLuong: 500},
    {danhGia: 'B', soLuong: 300},
    {danhGia: 'C', soLuong: 100},
]
a ) Hãy in lại ttsach có tên viết hoa ở đầu mỗi chữ VD: Cach Tap Gym 
b ) Hãy in lại ttsach theo danh sach ngày xuất bản gần nhất tới xa nhất 
c ) Giá của mỗi sách khi bán = giaNhap + chiPhi 
d ) bienLai là ứng với các đại lý phân phối sách  thì nếu tất cả đại lý bán hết số sách đã 
được nêu của từng chi nhánh hãy in ra kết quả là đã đạt đủ chỉ tiêu được đề ra ở bảng mucTieu 

 */
let ttSach = [
    {ten: 'Vuot len chinh minh', danhGia: 'A', nhaXB: 'Kim dong', ngayPhatHanh: '12/5/2018', giaNhap: 20000},
    {ten: 'Putin', danhGia: 'A', nhaXB: 'tuoi tre', ngayPhatHanh: '12/5/2019', giaNhap: 12000},
    {ten: 'Cach lam giau', danhGia: 'B', nhaXB: 'Kim dong', ngayPhatHanh: '16/6/2018', giaNhap: 15000},
    {ten: 'Cach de lam Vuong Tu', danhGia: 'C', nhaXB: 'tuoi tre', ngayPhatHanh: '8/8/2017', giaNhap: 30000},
    {ten: 'Cach de hack facebook', danhGia: 'B', nhaXB: 'Kim dong', ngayPhatHanh: '11/5/2019', giaNhap: 20000},
    {ten: 'ngay mai tuoi sang', danhGia: 'C', nhaXB: 'tuoi tre', ngayPhatHanh: '16/7/2018', giaNhap: 40000},
    {ten: 'Lam the nao de hieu 1 nguoi', danhGia: 'A', nhaXB: 'ban mai', ngayPhatHanh: '16/5/2017', giaNhap: 50000},
    {ten: 'cach tap gym', danhGia: 'B', nhaXB: 'tuoi tre', ngayPhatHanh: '13/4/2020', giaNhap: 30000},
]

let nxBan = [
    {ten: 'Kim dong', chiPhi: 5000},
    {ten: 'tuoi tre', chiPhi: 15000},
    {ten: 'ban mai', chiPhi: 10000},
]

let bienLai = [
    {tenCH: 'HCM',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:150},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:80},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'HN',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:150},
        {ten:'Putin', soLuong:100},
        {ten:'Cach lam giau', soLuong:80},
        {ten:'Cach de hack facebook', soLuong:80},
        {ten:'Cach de lam Vuong Tu', soLuong:80},
        {ten:'ngay mai tuoi sang', soLuong:60},
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:60},
    ]},
    {tenCH: 'SG',
     sach:[
        {ten:'Vuot len chinh minh', soLuong:50},
        {ten:'Putin', soLuong:100},
        {ten:'ngay mai tuoi sang', soLuong:60},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'DN',
     sach:[
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:50},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:30},
        {ten:'Cach de hack facebook', soLuong:20},
    ]},
    {tenCH: 'NA',
     sach:[
        {ten:'cach tap gym', soLuong:50},
        {ten:'Putin', soLuong:50},
        {ten:'Cach lam giau', soLuong:30},
        {ten:'Lam the nao de hieu 1 nguoi', soLuong:20},
    ]},
]

let mucTieu = [
    {danhGia: 'A', soLuong: 500},
    {danhGia: 'B', soLuong: 300},
    {danhGia: 'C', soLuong: 100},
]

// a


let stringName = ttSach.map(function(value){
    return value.ten.split(' ')
})

let newName = stringName.map(function(value){
    let nameBook = value.map(function(value1){
        return value1.replace(value1[0] , value1[0].toUpperCase())
    }).join(' ')
    return nameBook
})

function fixName (input){
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < newName.length; j++) {
            if(i == j){
                input[i].ten = newName[j]
            }
        }
    }
    return input
}
// console.log(fixName(ttSach));



// b

let fixDate = ttSach.map(function(value){
    let arrayDate = value.ngayPhatHanh.split('/')
    let daoDate = arrayDate.reverse()
    value.ngayPhatHanh = daoDate.join('/')
    return value
})

let sapXep = ttSach.sort(function(a , b){
    if(a.ngayPhatHanh < b.ngayPhatHanh){
        return -1
    }
})
// console.log(sapXep);

// c
for (let i = 0; i < ttSach.length; i++) {
    const element = ttSach[i];
    for (let j = 0; j < nxBan.length; j++) {
        const nhaXuatBan = nxBan[j];
        if(element.nhaXB === nhaXuatBan.ten){
            element.giaSach = element.giaNhap + nhaXuatBan.chiPhi
        }
    }
}
// console.log(ttSach);

// d
// for (let i = 0; i < bienLai.length; i++) {
//     const element = bienLai[i];
//     var sum = 0
//     for (let j = 0; j < element.sach.length; j++) {
//         const element1 = element.sach[j];
//         sum += element1.soLuong
//     }
//     element.tongSoLuong = sum
// }

// for (let i = 0; i < bienLai.length; i++) {
//     const element = bienLai[i];
//     if(element.tongSoLuong >= 500){
//         element.danhGia = 'A'
//     }else if(element.tongSoLuong >= 300){
//         element.danhGia = 'B'
//     }else if(element.tongSoLuong > 100){
//         element.danhGia = 'C'
//     }
// }
// console.log(bienLai);

bienLai.map(function(chiNhanh){
    return chiNhanh.sach.map(function(value){
        for(let i = 0; i < ttSach.length; i++){
            if(value.ten === ttSach[i].ten){
                value.danhGia = ttSach[i].danhGia
                return value
            }
        }
    })
})

// console.log(228 , bienLai);
// b2       tính tổng sách theo đánh giá
let ketQua = {}

for(let i = 0; i < bienLai.length; i++){
    bienLai[i].sach.map(function(value){
        if(!ketQua[value.danhGia]){
            ketQua[value.danhGia] = value.soLuong
        }else{
            ketQua[value.danhGia] += value.soLuong
        }
    })
}

// b3       kiểm tra xem đạt chỉ tiêu không
mucTieu.map(function(value){
    value.ketQua = ketQua[value.danhGia] >= value.soLuong ? {hoanThanh: true, vuotChiTieu: ketQua[value.danhGia] - value.soLuong} 
    : {hoanThanh: false,thieu: value.soLuong - ketQua[value.danhGia]}
    return  value
})

console.log(mucTieu);